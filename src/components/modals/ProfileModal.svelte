<script lang="ts">
    import { image_root, member_name_dict } from "../../stores/constants";
    import { profile, dark, dynamic_dark_border } from "../../stores/preferences";
    import Dropzone from 'svelte-dropzone';
    import api, { SERVER_ROOT } from "../../api";

    const base = [
        {"path": "la-vie-en-rose", "name":"라비앙 로즈"},
        {"path": "violeta", "name":"비올레타"},
        {"path": "fiesta", "name":"피에스타"},
        {"path": "the-secret-story-of-swan", "name":"환상동화"},
        {"path": "one-the-story", "name":"One The Story 포스터"},
        {"path": "one-the-story-appreciation", "name":"One The Story 소감"},
        {"path": "eating-trip-3", "name":"잇힝 트립 3"},
        {"path": "latest", "name":"최신 프메"},
        {"path": "birthday", "name":"생일 프메"}
    ];

    let choices = [];

    if (choices.length == 0){
      fetch(SERVER_ROOT+"/프로필_사진_목록.json", {cache: "no-cache"})
        .then(res=>res.json())
        .then(profile_list=>{
            choices = profile_list;
            console.log(profile_list);
            console.log("프로필 사진 목록 로딩 완료")
        }).catch(e=>{
            console.error("프로필 사진 목록을 불러오지 못했습니다.");
            console.error(e);
            console.log("기본 목록을 사용합니다.")
            choices = base;
        })
    }

    function shuffle(array: number[]): number[] {
        let top = array.length;
        let current: number;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            [array[current], array[top]] = [array[top], array[current]];
        }
        return array;
    }

    let width: number;
    $: max_n = Math.floor((width - 36) / 36);

    $: member_n_list = shuffle([...Array(12).keys()]).slice(0,max_n);

    let theme: string;
    let new_name: string;

    $: is_mp4 = theme && theme.includes("-mp4");
    $: ending = is_mp4 ? '.mp4' : '.jpg';
    $: acceptedFiles = is_mp4 ? 'video/mp4' : 'image/jpeg';

    let new_file_dict: Map<string, boolean> = [
      "권은비", "미야와키 사쿠라", "최예나", "강혜원",
      "이채연", "김채원", "김민주", "야부키 나코",
      "혼다 히토미", "조유리", "안유진", "장원영"
    ].reduce((acc, member)=>{
      acc.set(member, false)
      return acc;
    }, new Map());

    
    const addedfile = (file: File) => {
      setTimeout(()=>{
        const member_name = file.name.replace(ending, "")

        if (new_file_dict.has(member_name)){
          new_file_dict.set(member_name, true)
          new_file_dict = new_file_dict;
        }

        if (! [...new_file_dict.values()].every(b=>b)) return null;
        if (choices.some(choice=> choice.path == theme)) return null;

        choices.push({
          path: theme,
          name: new_name
        });
        choices = choices;
        setTimeout(()=>alert("새 프로필 테마 추가 완료!"), 500);

        api.add_profile_theme(theme, new_name);
      }, 200);
    };

    const drop = (e) => console.log(e.target);

    const theme_input_rule = new RegExp("^[a-zA-Z0-9\-]+$");

    $: is_valid = theme_input_rule.test(theme) && new_name
</script>

<style>
#ProfileChoiceList {
    max-height: 512px;
}

h3 {
    font-size: 1.5rem;
    text-align: center;
}

input#ThemeInput:invalid {
  border-color: tomato;
  color: tomato
}

</style>
<div class={$dark ? 'text-gray-300': 'text-black'}>
  <h3>
    프로필 사진 바꾸기
  </h3>
  <section id="UploadProfile" class="pl-4 mt-4">
    <label for="ThemeInput">
      새 테마 폴더 이름 (알파벳과 숫자, - 만 허용)<br>
      <input type="text"
             id="ThemeInput"
             class="{$dynamic_dark_border} {$dark ? 'bg-gray-700' : '' } border-2 rounded"
             placeholder="ex) one-the-story"
             pattern="^[a-zA-Z0-9\-]+$"
             bind:value={theme}>
    </label>
    <br>
    <label for="NameInput">
      새 테마 이름 (목록에서 표시)<br>
      <input type="text"
             id="NameInput"
             class="{$dynamic_dark_border} {$dark ? 'bg-gray-700' : '' } border-2 rounded"
             placeholder="ex) 원, 더 스토리"
             bind:value={new_name}>
    </label>
    {#if is_valid}
      <Dropzone
        options={{
          url: SERVER_ROOT + "/upload/profile/" + theme +"/",
          acceptedFiles: acceptedFiles
        }}
        dropzoneClass="border-4 border-dashed 
                       {$dark ? 'bg-gray-500 border-gray-600' : 'bg-gray-200 border-gray-300'}
                      rounded-lg text-center p-5 m-1"
        dropzoneEvents={{addedfile, drop}}>
        여기에 사진을 드래그 {ending}
      </Dropzone>
      <ul class="flex flex-wrap">
        {#each [...new_file_dict.entries()] as [member_name, uploaded]}
          <li>
            <figure>
              {#if uploaded}
                {#if is_mp4}
                  <video class="w-12 h-12 rounded-full m-1" autoplay loop>
                    <source src="{image_root}profile/{theme}/{member_name}{ending}" type="video/mp4">
                    <track kind="captions">
                  </video>
                {:else}
                  <img class="w-12 h-12 rounded-full m-1"
                       src="{SERVER_ROOT}/img/profile/{theme}/{member_name}{ending}"
                       alt="{member_name}">
                {/if}
              {:else}
                <div class="p-3 w-12 h-12 rounded-full m-1 bg-gray-300 text-center border-2 {$dynamic_dark_border}">
                ?
                </div>
              {/if}
              <figcaption class="text-xs w-14 text-center" style="word-break: keep-all;">
                {member_name}
              </figcaption>
            </figure>
          </li>
        {/each}
      </ul>
    {/if}
  </section>

  <div id="ProfileChoiceList"
    class="flex flex-col p-4 w-full"
    bind:clientWidth={width}>
      {#each choices as choice}
          <label class="{$dark ? 'text-gray-300': 'text-black'}">
              <input type="radio" bind:group={$profile} value={choice.path}>
              {choice.name}
              <br/>
              <div class="h-9 flex flex-row">
                {#each member_n_list as n}
                  {#if choice.path.includes('-mp4')}
                    <video class="w-9 h-9 rounded-full border-gray-{$dark ? '700' : '100'}  border-2" autoplay loop>
                      <source src="{image_root}profile/{choice.path}/{member_name_dict[n]}.mp4" type="video/mp4">
                      <track kind="captions">
                    </video>
                  {:else}
                    <img
                        src="{image_root}profile/{choice.path}/{member_name_dict[n]}.jpg"
                      class="w-9 h-9 rounded-full border-gray-{$dark ? '700' : '100'}  border-2
                      float-left" alt=""/>
                  {/if}
                {/each}
              </div>
          </label>
      {/each}
  </div>
</div>
