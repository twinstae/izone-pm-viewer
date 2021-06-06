import { writable, Writable, derived, Readable } from "svelte/store";
import { raw_image_list } from "./now";
import { is_favorite } from "./favoriteImage";

export let show_favorite: Writable<boolean> = writable(false);

let image_list: Readable<ImageT[]> = derived(
  [raw_image_list, show_favorite, is_favorite],
  ([$raw_image_list, $show_favorite, $is_favorite]) => {
    console.time("image_list")
    const result = $raw_image_list.filter((img: ImageT) => (!$show_favorite) || $is_favorite(img))
    console.timeEnd("image_list")
    return result;
  }
)
 // $: console.log("image_list", image_list)

export let sorted_date_list: Readable<string[]> = derived(
  [image_list],
  ([$image_list]) => {
    console.time("sorted")
    const result = [...new Set($image_list.map((i)=>i.date))];
    console.timeEnd("sorted")
    return result;
  }
) // $: console.log("sorted_date_list", sorted_date_list);

export let max_index = derived(sorted_date_list, ($sorted_date_list) => $sorted_date_list.length);

const init_dict: ()=>Map<string, ImageT[]> = () => new Map();

export let date_image_dict = derived(image_list,
  ($image_list)=> {
    console.time("date_image_dict")
    const result = $image_list
    .reduce((acc, image: ImageT)=>{
      if (! acc.has(image.date)){
          acc.set(image.date, []);
      }
      acc.get(image.date).push(image);
      return acc;
  }, init_dict());
    console.timeEnd("date_image_dict");
    return result;
  }
);

