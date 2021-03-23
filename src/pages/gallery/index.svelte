<script lang="ts">
import ImageBox from "../../components/ImageBox.svelte";

    interface Image {
        date: string;
        name: string;
        n: string;
    }

    const data = [
        {"date": "2021-03-21", "name": "b90d39624e131102cd037536ae52686a.jpeg", "n": "6"},
        {"date": "2021-03-21", "name": "94cf5360320d40e1d3142cea84f99081.jpeg", "n": "7"},
        {"date": "2021-03-21", "name": "90384e791c8d1adc105a4f0ea6d68d3c.jpeg", "n": "8"},
        {"date": "2021-03-21", "name": "34932e3f9c24f95a5fcf0019d8231ac3.jpeg", "n": "9"},
        {"date": "2021-03-21", "name": "ead6e6f71df1d2d175a97fbda10576ed.jpeg", "n": "9"},
        {"date": "2021-03-21", "name": "c3281576e74db5c6933abe9df5935ab9.jpeg", "n": "11"},
        {"date": "2021-03-21", "name": "3e6e3d9f314bf90df5ff422d07687322.jpeg", "n": "12"},
        {"date": "2021-03-21", "name": "6b27979497b3a8efb71a90302fefad1a.jpeg", "n": "12"},
        {"date": "2021-03-21", "name": "a75b6b26a62405c797a95cef04c5fe68.jpeg", "n": "12"},
        {"date": "2021-03-21", "name": "b4b37951916017cda21c57f599c1ed0d.jpeg", "n": "12"},
        {"date": "2021-03-21", "name": "dec6537c06b004488ca6c1b613be5b28.jpeg", "n": "12"},
        {"date": "2021-03-21", "name": "e2791622abdcffa0f3f0f756c37567db.jpeg", "n": "12"}
    ];
    let image_list: Image[] = data.concat(data).concat(data).concat(data).concat(data);

    let now_page = 1;
    $: now_image_list = image_list && image_list.slice(0, (now_page)*6);

    const get_init_value: ()=>{[date: string]: Image[]}
        = ()=>({});

    $: date_image_dict = now_image_list.reduce((acc, image)=>{
        if (acc[image.date] == null){
            acc[image.date] = [];
        }
        acc[image.date].push(image);
        return acc;
    }, get_init_value());

    $: sorted_date_list = [...new Set(image_list.map(i=>i.date))].sort();

    let y: number = 0;
    let inner: number;
    let height: number;

    let loading = false;

    function onScroll(){
        if(inner+y+10 > height && !loading){
            loading = true;
            setTimeout(()=>{
                now_page +=1;
                loading = false;
            }, 300)
        }
    }
</script>
<svelte:window bind:scrollY={y} on:scroll={onScroll} bind:innerHeight={inner} />
<div class="flex flex-col" bind:clientHeight={height}>
    {#each sorted_date_list as date}
        <h3 class="bg-white p-2 text-2xl text-center">{date}</h3>
        <ul class="flex flex-wrap">
            {#each date_image_dict[date] as image}
                <ImageBox image={image}/>
            {/each}
        </ul>
    {/each}
</div>