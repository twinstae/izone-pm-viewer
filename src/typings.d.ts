interface Mail {
    "id": string,
    "member": string,
    "time": string,
    "subject": string,
    "preview": string
};

declare module '_pm_list.json' {
    const pm_list: Mail[];
    export default pm_list;
}