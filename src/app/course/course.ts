export class Course {
    id: string;
    title: string;
    description: string;
    link: string;
    photoUrl: string;
    recommendations: number;

    constructor(id: string, title: string, description: string, link: string, photoUrl: string, recommendations: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.photoUrl = photoUrl;
        this.recommendations = recommendations;
    }
}