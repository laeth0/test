
// 1- تعريف المتغيرات #####
const name = document.querySelector("#courseName");
const category = document.querySelector("#courseCategory");
const price = document.querySelector("#coursePrice");
const description = document.querySelector("#courseDescription");
const capacity = document.querySelector("#courseCapacity");
const addBtn = document.querySelector("#click");
let courses = [];

// 7- تحميل الكورسات من التخزين المحلي وتعريف القايمة المتصلة بالعنصر التي سيتم عرض الكورسات الليها
    //  عمل اف للتأكد من  الاريه فيها داتا وكل مرة يفتح المتصفح يجد فيها داتا 
    if (localStorage.getItem("courses") != null) {
        // تحويل الى شكل اريه افاوبجكت  استرينج  JSON.parse 
        courses = JSON.parse(localStorage.getItem("courses"));
        displayCourses();
    }


// 2- اضافة الزر والفنكشن تبعه ####
// نشا الزر

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    // 3-  ��نشا�� الكورس  ,وعمل أوبجت لهذه الاريه    
    const course = {
        name: name.value,
        category: category.value,
        price: parseFloat(price.value),
        description: description.value,
        capacity: parseInt(capacity.value)
    };

    // ننشأ الاضافة لل الأريه//  =================================
    courses.push(course);

    // 4-   ادخال الكورسات الجديدة في التخزين المحلي 
    localStorage.setItem("courses", JSON.stringify(courses));


    //6-  مناداة فنكشن العرض displayCourses
    displayCourses();
});


// جلب البيانات من sessionStorage (يمكنك استخدام localStorage بدلاً من ذلك)
const courses = JSON.parse(sessionStorage.getItem("courses"));

// دالة لعرض البيانات (نفس الدالة الموجودة في الصفحة الأولى)
function displayCourses() {
  const result = courses.map((course, index) => {
    return `<tr>
      <td>${index}</td>
      <td>${course.name}</td>
      <td>${course.category}</td>
      <td>${course.price}</td>
      <td>${course.description}</td>
      <td>${course.capacity}</td>
    </tr>`;
  }).join(' ');

  document.querySelector("#data").innerHTML = result;
}

// استدعاء الدالة لعرض البيانات
displayCourses();