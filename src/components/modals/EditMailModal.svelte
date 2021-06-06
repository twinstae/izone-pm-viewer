<script lang="ts">
import { member_tags } from "../../stores/all_tag_dict";
import { member_color_to_dark_dict } from "../../stores/constants";
import { dark } from "../../stores/preferences";

let member: string;
let title: string;
let id: string;
// let body: string;

let bodyEditor: HTMLDivElement;
let editorHTML: string;

$: matches = editorHTML ? editorHTML.matchAll(/\<img[^>]+src\=\"([^>]+?)\"[^>]*\>/g) : [];
$: images = [...matches].map(m=>m[1]);

function onPaste(event: ClipboardEvent){
  const html = event.clipboardData.getData('text/html');

  const match = html.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
  const image_src = match[1];
  //  addImage(image_src);
  //  event.preventDefault();
}

function onDrop(e: DragEvent){
  e.stopPropagation();
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;
  const file = e.dataTransfer.files[0];
  console.log(file.type)
  if (! file.type.match('image.*')) return null;
  console.log("i am here")

  const reader = new FileReader();

  reader.onload = (function(theFile) {
    const dataURI = theFile.target.result as string;
    const new_img = document.createElement("img");
    new_img.src = dataURI;

    if (document.caretPositionFromPoint) {
      const pos = document.caretPositionFromPoint(x, y);
      const range = document.createRange();
      range.setStart(pos.offsetNode, pos.offset);
      range.collapse();
      range.insertNode(new_img);
    }
    else if (document.caretRangeFromPoint) {
      const range = document.caretRangeFromPoint(x, y);
      range.insertNode(new_img);
    }
    else {
      console.log('could not find carat');
    }
  });

  reader.readAsDataURL(file);
}

document.execCommand('defaultParagraphSeparator', false, 'p');

</script>

<h3>새로운 메일 입력</h3>
 <label for="MailIdInput" class="ml-4">
  번호
  <input bind:value={id} class:dark={$dark} type="text" id="MailIdInput" name="id">
 </label>
 <div class="flex flex-wrap p-1 ml-3 mr-3 text-black">
    {#each member_tags as choice}
      <label
        style="background-color:{ $dark ? member_color_to_dark_dict[choice.color] : choice.color}"
        class="{choice.color=='#fff' ? 'p-0 border-2 border-gray' : 'p-0.5'} rounded m-0.5">
        <input
          id="MailMemberRadio-{choice.value}"
          type="radio" bind:group={member} value={choice.value}>
        {choice.value}
      </label>
    {/each}
</div>
<label for="MailTitleInput" class="ml-4">
  제목
  <input bind:value={title} class:dark={$dark} type="text" id="MailTitleInput" name="title">
</label>
<br>
<h4 class="ml-4">내용</h4>
<div id="EditBody" contenteditable 
     class="w-full" class:dark={$dark}
     bind:this={bodyEditor}
     bind:innerHTML={editorHTML}
     on:paste={onPaste}
     on:drop={onDrop}>
</div>
{#if images.length > 0}<h4>이미지</h4>{/if}
<ul>
  {#each images as image, i}
    <li>{i+1}. {image}</li>
  {/each}
</ul>

<style>
h3 {
    font-size: 1.5rem;
    text-align: center;
}

input:invalid {
  border-color: tomato;
  color: tomato
}

input[type=text], div#EditBody {
  margin: 0.5rem 1rem;
  width: 90%;
  padding: 2px;
  border-radius: 0.2rem;
  border: 2px solid lightgray;
}

div#EditBody {
  min-height: 20rem;
}

input[type=text].dark, div#EditBody.dark {
  background-color: rgb(55, 65, 81);
}

li {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
