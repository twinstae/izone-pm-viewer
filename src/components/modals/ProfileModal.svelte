<script lang="ts">
    import { image_root, member_name_dict } from "../../stores/constants";
    import { profile, dark, dynamic_dark_bg, dynamic_dark_border } from "../../stores/preferences";
    import Dropzone from 'svelte-dropzone';

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
      fetch("./프로필_사진_목록.json")
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
    $: console.log(width);
    $: max_n = Math.floor((width - 36) / 36);

    $: member_n_list = shuffle([...Array(12).keys()]).slice(0,max_n);

    const addedfile = (file: File) => console.log(file);
    const drop = (event: Event) => console.log(event.target);
</script>

<style>
#ProfileChoiceList {
    max-height: 512px;
}

h3 {
    font-size: 1.5rem;
    text-align: center;
}
</style>

<h3 class="{$dark ? 'text-gray-300': 'text-black'}">
  프로필 사진 바꾸기
</h3>
<Dropzone
  dropzoneEvents={{addedfile, drop}}>
  <span class="{$dark ? 'text-gray-300' : 'text-black'}">
  새 프로필 사진 올리기
  </span>
</Dropzone>

<div id="ProfileChoiceList"
  class="flex flex-col p-4 w-full"
  bind:clientWidth={width}>
    {#each choices as choice}
        <label class="{$dark ? 'text-gray-300': 'text-black'}">
            <input type="radio" bind:group={$profile} value={choice.path}>
            {choice.name}
            <br/>
            <div class="h-9">
                {#each member_n_list as n}
                  <img
                  src="{image_root}profile/{choice.path}/{member_name_dict[n]}.jpg"
                  class="w-9 h-9 rounded-full border-gray-{$dark ? '700' : '100'}  border-2
                  float-left" alt=""/>
                {/each}
            </div>
        </label>
    {/each}
</div>
