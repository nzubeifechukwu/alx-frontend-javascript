import Subjects from './Cpp';

Subjects = {
  ...Subjects,
  interface Subjects.Teacher {
    experienceTeachingReact?: number;
  },
  class React {
    getRequirements(): string {
      return 'Here is the requirements for React';
    }

    getAvailableTeacher(): string {
      if (Subjects.Teacher.experienceTeachingReact) {
        return `Available Teacher: ${Subjects.Teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }  
}
