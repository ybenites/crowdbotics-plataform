export default class App {
    id: number;
    name: string;
    description: string;
    type: string;
    framework: string;
    domain_name: string;
    screenshot: string;
    subscription: number;
    user: number;
    created_at: string;
    updated_at: string;

    constructor(
        id: number,
        name: string,
        description: string,
        type: string,
        framework: string,
        domain_name: string,
        screenshot: string,
        subscription: number,
        user: number,
        created_at: string,
        updated_at: string
    )
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.framework = framework;
        this.domain_name = domain_name;
        this.screenshot = screenshot;
        this.subscription = subscription;
        this.user = user;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}