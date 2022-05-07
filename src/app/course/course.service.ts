import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _baseUrl: string;
  
  constructor(private _httpClient: HttpClient) { 
    this._baseUrl = environment.baseUrl;
  }

  public GetAllCourses() : Observable<Course[]> {
    return this._httpClient.get<Course[]>(`${this._baseUrl}/courses`);
  }

  public GetCourseById(id: string) : Observable<Course> {
    return this._httpClient.get<Course>(`${this._baseUrl}/courses/${id}`);
  }
}