interface MailT {
    id: string;
    member: string;
    time: string;
    subject: string;
    preview: string;
    body?: string;
    images?: string[];
    nick?: string;
};

interface TagT {
    value: string;
    color: string;
}

interface ProfileT {
    path: string;
    name: string;
}
