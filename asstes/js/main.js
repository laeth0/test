// 1- تعريف المتغيرات #####
const name = document.querySelector("#courseName");
const category = document.querySelector("#courseCategory");
const price = document.querySelector("#coursePrice");
const description = document.querySelector("#courseDescription");
const capacity = document.querySelector("#courseCapacity");
const addBtn = document.querySelector("#click");
const deleteBtn = document.querySelector("#deleteBtn");
const updateBtn = document.querySelector(".UpdateBtn");
const search = document.querySelector("#search");
let updatIndex = -1;


// Validation
const invalidName = document.querySelector(".invalid-name");
const invalidCategory = document.querySelector(".invalid-category");
const invalidPrice = document.querySelector(".invalid-price");
//const invalidDescription = document.querySelector(".invalid-description");
const invalidCapacity = document.querySelector(".invalid-capacity");


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

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //   الفاليديشن *2  *    ))))))))))
  let isValid = true;

  //   الفاليديشن *1 *  namePattern  ))))))))))
  const namePattern = /^[A-Z][a-z]{2,10}[0-9]{0,2}$/;



  if (!namePattern.test(name.value)) {
    invalidName.innerHTML = "this name is Invalid. it must start with a Capital Letter and contain 2 - 10 char small Letters!";

    name.classList.add("is-invalid");

    isValid = false;
    /*
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "invalid Course name !",
    });*/
  } else {
    invalidName.innerHTML = "";
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");

  }


  // categoryPattern  Validation
  const categoryPattern = /^[A-Z][a-z]{2,3}$/;
  if (!categoryPattern.test(category.value)) {
    invalidCategory.innerHTML = "this Category is Invalid. it must start with a Capital Letter and contain 2 - 3 char small Letters!";
    category.classList.add("is-invalid");
    isValid = false;
  } else {
    invalidCategory.innerHTML = "";
    category.classList.remove("is-invalid");
    category.classList.add("is-valid");
  }

  // PricePattern  Validation
  const PricePattern = /^[0-9]{2,3}$/;
  if (!PricePattern.test(price.value)) {
    invalidPrice.innerHTML = "this price is Invalid. it must start  2 - 3 number !";
    price.classList.add("is-invalid");
    isValid = false;
  } else {
    invalidPrice.innerHTML = "";
    price.classList.remove("is-invalid");
    price.classList.add("is-valid");
  }

  /*
  // descriptionPattern  Validation
  const descriptionPattern = /^[A-Z][a-z]{0,9}$/;
  if (!categoryPattern.test(description.value)) {
   invalidDescription.innerHTML = "this description is Invalid. it must start with a Capital Letter and contain 100 char small Letters!";
   description.classList.add("is-invalid");
    isValid = false;
  }else {
   invalidDescription.innerHTML = "";
   description.classList.remove("is-invalid");
   description.classList.add("is-valid");
  } */




  // CapacityPattern  Validation
  const CapacityPattern = /^[0-9]{2,3}$/;
  if (!CapacityPattern.test(capacity.value)) {
    invalidCapacity.innerHTML = "this capacity is Invalid. it must start  2 - 3 number !";
    capacity.classList.add("is-invalid");
    isValid = false;
  } else {
    invalidCapacity.innerHTML = "";
    capacity.classList.remove("is-invalid");
    capacity.classList.add("is-valid");
  }



  //   الفاليديشن *1 *   ))))))))))

  if (isValid) {
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

    // 8- //   فنكشن السويت اليرت 

    Swal.fire({
      title: "Course added !",
      text: "New Course is added!",
      icon: "success"
    });

    /*
    const Toast = Swal.mixin({
      width: "500%",
      imageHeight: "500%",
      toast: true,
      position: "center center",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "New Course is added! successfully"
    });
    */
    //6-  مناداة فنكشن العرض displayCourses
    displayCourses();


  }

});

// 5- تحميل الكورسات من التخزين المحلي وتعريف القا��مة المتصلة بالعنصر التي سيتم عرض الكورسات ��ليها
// ضفنا Map  وتعدل عليها لأن الماب تضيف عناصر على الاوبجت وتقرأها 

function displayCourses() {
  const result = courses.map((course, index) => {
    return `<tr>

                    <td>${index}</td>
                    <td>${course.name}</td>
                    <td>${course.category}</td>
                    <td>${course.price}</td>
                    <td>${course.description}</td>
                    <td>${course.capacity}</td>
                    <td>
                    <button class="btn btn-danger" onclick='deleteCourse(${index})'>delete</button>
                    </td>
                     <td>
                    <button class="btn btn-primary" onclick='updateCourse(${index})'>update</button>
                    </td>

                </tr>`;
  }).join(' ');

  document.querySelector("#data").innerHTML = result;
}

// حذف الكورس 
function deleteCourse(index) {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    // `The course "${deletedCourse}" has been deleted.`

    text: `You   will not be able to undo this course!  `,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {

      // الحصول على اسم الدورة قبل الحذف
      const deletedCourse = courses[index].name; // افترض أن اسم الدورة مخزن في خاصية "name"

      courses.splice(index, 1);

      console.log(index);

      localStorage.setItem("courses", JSON.stringify(courses));
      displayCourses();




      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: `The course "${deletedCourse}" has been deleted.`,
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });


  /*
    Swal.fire({
      icon: "success",
      title: "Course deleted!",
      text: `The course "${deletedCourse}" has been deleted successfully.`,
    });
    
    const Toast = Swal.mixin({
      width: "500%",
      imageHeight: "500%",
      toast: true,
      position: "center center",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Course deleted! successfully"
    });
    */
}

// search Course

search.addEventListener("input", (e) => {

  const keyword = search.value;

  const coursesResult = courses.filter((course) => {
    return course.name.toLowerCase().includes(keyword.toLowerCase());
  });

  const result = coursesResult.map((course, index) => {
    return `
    <tr>
    <td>${index}</td>
    <td>${course.name}</td>
    <td>${course.category}</td>
    <td>${course.price}</td>
    <td>${course.description}</td>
    <td>${course.capacity}</td>
    <td>
    <button class="btn btn-danger" onclick='deleteCourse(${index})'>delete</button>
    </td>
     <td>
      <button class="btn btn-primary">update</button>
      </td>
    </tr>
    `;
  }).join(' ');

  document.querySelector("#data").innerHTML = result;


});





// update Course
/* 
updateBtn.addEventListener("click", () => {
  const updatedCourse = {
    name: name.value,
    category: category.value,
    price: parseFloat(price.value),
    description: description.value,
    capacity: parseInt(capacity.value)
  };
  courses[updateIndex] = updatedCourse;
  localStorage.setItem("courses", JSON.stringify(courses));
  displayCourses();
  Swal.fire({
    title: "Course updated!",
    text: "The course has been updated successfully.",
    icon: "success"
  });
  updateIndex = -1;
  clearForm();
  clearInvalidMessages();

  clearForm();
  clearInvalidMessages();
});

function clearForm() {
  name.value = "";
  category.value = "";
  price.value = "";
  description.value = "";
  capacity.value = "";
}
*/



// updateCourse(${index})

function updateCourse(index) {
  console.log(index);
  updatIndex = index;
  name.value = courses[index].name;
  category.value = courses[index].category;
  price.value = courses[index].price;
  description.value = courses[index].description;
  capacity.value = courses[index].capacity;

  addBtn.style.display = "none";
  updateBtn.style.display = "block";
}

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // check validation
  console.log(updatIndex);

  courses[updatIndex].name = name.value;
  courses[updatIndex].category = category.value;
  courses[updatIndex].price = parseFloat(price.value);
  courses[updatIndex].description = description.value;
  courses[updatIndex].capacity = parseInt(capacity.value);

  addBtn.style.display = "block";
  updateBtn.style.display = "none";
  displayCourses();
});



// dellete All Course

deleteBtn.addEventListener("click", () => {


  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    // `The course "${deletedCourse}" has been deleted.`

    text: `You will not be able to undo this !  `,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {

      courses = [];

      localStorage.setItem("courses", JSON.stringify(courses));
      displayCourses();
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: `The course "${deletedCourse}" has been deleted.`,
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });


})