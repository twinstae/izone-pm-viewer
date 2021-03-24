interface Mail {
    id: string;
    member: string;
    time: string;
    subject: string;
    preview: string;
    body?: string;
    nick?: string;
};

interface Tag {
    value: string;
    color: string;
}