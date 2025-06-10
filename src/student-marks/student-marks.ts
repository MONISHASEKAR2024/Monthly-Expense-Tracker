import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-marks',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-marks.html',
  styleUrl: './student-marks.css'
})
export class StudentMarks {
  name: string ='';
  marks:number | null=null;
  student:{name:string, marks:number, subject:string, section: string}[]=[];
  subject:string ='';
  section:string ='';
  // subject: string[]=['Tamil', 'English', 'Maths', 'Science', 'Social'];

  preventnegative(e: KeyboardEvent){
    if(e.key === '-' || e.key === 'e' || e.key === 'E'){
      e.preventDefault()
    }
  }

  OnAdd(){
    if((this.name.trim() !== '')&& this.marks !==0 && this.subject.trim() !== '' && this.section.trim() !== ''){
     

         this.student.push({
          name: this.name,
          marks: Number(this.marks),
          section: this.section,
          subject: this.subject

      })
      this.name='',
      this.marks=null,
      this.subject='',
      this.section=''
      }else{
        alert('Please enter valid inputs')
      }

      // const isDuplicate = this.student.some(
      //   (s)=> 
      //     s.name.toLowerCase () === this.name.trim().toLowerCase()&&
      //     s.section.toLowerCase() === this.section.trim().toLowerCase()&&
      //     s.subject.toLowerCase() === this.subject.trim().toLowerCase()
      // );

      // if(isDuplicate){
      //   alert('This subject is alredy exists')
      // }
      // this.student.push({
      //   name:this.name,
      //   section: this.section,
      //   subject: this.subject,
      //   marks:Number(this.marks) 

      // });

      // this.name='',
      // this.section='',
      // this.subject='',
      // this.marks =null;

  }

  getTotal():number{
    return this.student.reduce((acc,item)=> acc + item.marks,0);
  }
}

