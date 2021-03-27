interface Mail {
    id: string;
    member: string;
    time: string;
    subject: string;
    preview: string;
    body?: string;
    images?: string[];
    nick?: string;
};

interface Tag {
    value: string;
    color: string;
}

interface Profile {
    path: string;
    name: string;
}