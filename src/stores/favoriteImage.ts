import { Writable, writable, derived } from 'svelte/store';

export let favorite_image_set: Writable<Set<string>> = writable(new Set([
"m18240img/mail/8/20210427/e9293c0a84889ac9fc3cda4b1fcffb34.jpeg",
  "m25612img/mail/8/20210427/2a166e5002294217b834e7edba4baa4b.jpeg",
  "m25612img/mail/8/20210427/6c1bb42c8bd93033b33becdbee312726.jpeg",
  "m25606img/mail/2/20210427/3d98c48690a6468cd36f8b3ba266c600.jpeg",
  "m25600img/mail/10/20210427/26b023cf0421dc465512781fd4d054e2.jpeg",
  "m25599img/mail/4/20210427/fbaadc07b39f894a0050178f5a11fa5e.jpeg",
  "m25602img/mail/7/20210427/e8a32ef2c41d9939b09380e9158d6bcc.jpeg",
  "m25601img/mail/6/20210427/201901db9e14a0ed0694fe1a8ae2cd4c.jpeg",
  "m25598img/mail/8/20210427/0281c018091856b97501c235e61eb1ac.jpeg",
  "m25596img/mail/8/20210427/38d96e88f232ed0bc7149c7d5d3fa967.jpeg",
  "m25596img/mail/8/20210427/43924d589c1068313b8056a26a658493.jpeg",
  "m25594img/mail/5/20210427/12ec913aaa7baa0b866083eae009ebbc.jpeg",
  "m25578img/mail/9/20210427/ba21d384b377f2032e6bb80988fd8de3.jpeg",
  "m25578img/mail/9/20210427/390abc3a2f9bf161010b8f9d7ba7ed37.jpeg",
  "m25573img/mail/27/20210427/b02dcc0791c56ec70a49fec4df6b469e.jpeg",
  "m25570img/mail/1/20210427/41a215968c04cdfcdfb0cbf366a8a9ca.jpeg",
  "m25562img/mail/2/20210427/98187e7b4fec76a93ad788ad6cb41854.jpeg",
  "m25561img/mail/12/20210427/e56c27d76844fd43fc412db909cbb30f.jpeg",
  "m25558img/mail/11/20210427/6304206a093604775ef3597f5b7b776f.jpeg",
  "m25530img/mail/7/20210426/d9276fc4138ac27dde2dba73cf232390.jpeg",
  "m25530img/mail/7/20210426/10eb46a3c861c13f1108794cdefce2dc.jpeg",
  "m25530img/mail/7/20210426/d9276fc4138ac27dde2dba73cf232390.jpeg",
  "m25514img/mail/11/20210426/780c41677e0586b357d44c187d69f6d2.jpeg",
  "m25403img/mail/10/20210425/8953c66bc3a0decf440a19cdcb0a51d8.jpeg",
  "m25347img/mail/3/20210424/a9189cc4582b30fd523361b8b4998e08.jpeg",
  "m25344img/mail/2/20210424/5283377c3b64a2e5c379a84ba6755516.jpeg"
]));

export let is_favorite = derived(
  [favorite_image_set],
  ([$favorite_image_set]) => (image: ImageT) => $favorite_image_set.has(image.pm_id + image.path)
)

export function favorite_image(image: ImageT){
  favorite_image_set.update(v=>{
     const image_id = image.pm_id + image.path;
     if (v.has(image_id)){
       v.delete(image_id)
     } else {
       v.add(image_id);
     }
     return v;
   })
 }

