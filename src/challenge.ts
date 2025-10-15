// don't delete this import statement
import { Student } from "./students";

/**
 * 🌶️🌶️
 * `getStudentsByCourse` function:
 * - Accepts:
 *   - A `students` array of type `Student[]`.
 *   - A `course` parameter of type `string`.
 * - Returns an array of student objects who are enrolled in the specified course.
 * Example:
 *  getStudentsByCourse(students, "Music");
 *    // => [
 *    //   { id: 3, name: "Charlie", courses: ["Science", "English", "Music"] },
 *    //   { id: 5, name: "Eva", courses: ["Science", "Math", "Music"] },
 *    //   { id: 7, name: "Grace", courses: ["Math", "Science", "English", "Music"] },
 *    //   { id: 10, name: "Jack", courses: ["Math", "History", "Music"] }
 *    // ]
 */
function getStudentsByCourse(students: Student[], course: string): Student[] {
  return students.filter(
    (std) => typeof std.courses.find((crs) => crs === course) == "string"
  ); // replace empty array with what you see is fit
}

/**
 * 🌶️🌶️🌶️
 * `listAllCourses` function:
 * - Accepts:
 *   - A `students` array of type `Student[]`.
 * - Returns an array of all unique course names across all students.
 * - The array should contain each course only once, with no duplicates.
 * Example:
 *  listAllCourses(students);
 *    // => ["Math", "Science", "History", "English", "Art", "Music", "PE"]
 */
function listAllCourses(students: Student[]): string[] {
  let result: string[] = [];
  students.forEach((std) => {
    std.courses.forEach((crs) => {
      if (!result.find((course) => course === crs)) result.push(crs);
    });
  });

  return result; // replace empty array with what you see is fit
}

export { getStudentsByCourse, listAllCourses };
