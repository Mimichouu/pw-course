/*

1. Object destructuring là gì?
    - Destruct = phá huỷ, dỡ bỏ.
    - Lợi ích:
        + Giúp trích xuất các giá trị từ object.
        + Ngắn gọn, tiện lợi để làm việc với object.
        + Giảm duplication.

3. With destructuring
    - Multiple property:
        const { prop1, prop2, ... } = object;
    - Default value:
        const { prop = “Default” } = object;
    - Alias:
        const { prop: myProp } = object;
    - Deep Property:
        const { prop: { deepProp } } = object;
*/

const myClass = {
    code: 'K11',
    course: 'Full stack QA',
    class: {
        des: 'k11-pw',
        code: 'plwvn-k11'
    }
}

const a = myClass.code; //k11
const b = myClass.course; //full stack QA

// destructuring
const {code, course} = myClass; // k11
console.log(a, b, code);

// deep property 
const { class: {des} } = myClass;
console.log(des); // k11-pw

// default value
const { class: {name = 'k11--pw'} } = myClass;
console.log(name); // k11--pw

// alias: gắn lại biến khi tên biến bị trùng
const { code: codeMyclass, class: {code: codeClass} } = myClass;
console.log(codeMyclass); // k11


const employee = {
    name: 'nguyễn văn A',
    ages: 18,
    job: {
        name: 'IT',
        title: 'Junior'
    },
};

const { name: employeeName, ages, job: {name: jobName} } = employee;
console.log(`employName: ${employeeName} - ages: ${ages} - jogName: ${jobName}`);


