interface MailT {
    id: string;
    member: string;
    time: string;
    subject: string;
    preview: string;
    body: string;
    images: string[];
    nick?: string;
    videos: string[];
};

interface TagT {
    value: string;
    color: string;
}

interface ProfileT {
    path: string;
    name: string;
}


interface ImageT {
    id: number;
    date: string;
    path: string;
    pm_id: string;
}
