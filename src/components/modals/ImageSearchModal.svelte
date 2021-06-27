<script lang="ts">
import { goto, params } from '@roxi/routify';
import { getContext } from 'svelte';

    import Dropzone from 'svelte-dropzone';
import { SERVER_ROOT } from '../../api';
import { show_list } from '../../stores/now';
import { dark } from '../../stores/preferences';
import PinkButton from '../buttons/PinkButton.svelte';

let search_file_name = "";

const addedfile = (file: File) => {
  setTimeout(()=>{
    search_file_name = file.name;

    fetch(SERVER_ROOT+"/search-image/"+file.name)
      .then(res=>res.json())
      .then(res_json=>{
        console.log(res_json)
        result = res_json;
      });
  }, 200)
 }

let result = "...검색 중";

const {close} = getContext('simple-modal');

function go_to_search_result(){
  if (result == "...검색 중" || result == "이거 프메 아님"){
    return;
  }
  show_list.set(false);
  $goto("./", { ...$params, now_pm: result, showList: false})
  close();
}
</script>
<Dropzone
  options={{
  url: SERVER_ROOT + "/upload/search-image/",
  acceptedFiles: "image/jpeg"
}}
  dropzoneClass="border-4 border-dashed 
                 {$dark ? 'bg-gray-500 border-gray-600' : 'bg-gray-200 border-gray-300'}
                rounded-lg text-center p-5 m-1"
  dropzoneEvents={{addedfile}}>
  여기에 검색할 사진을 드래그
</Dropzone>
{#if search_file_name}
  <PinkButton
    id="GoToSearchResult"
    strong={true}
    onClick={go_to_search_result}>
      {result}
  </PinkButton>

  <div class="p-2">
    <img src="{SERVER_ROOT}/img/mail/test/{search_file_name}"
         alt="업로드한 이미지"
         class="rounded">
  </div>
 {/if}
