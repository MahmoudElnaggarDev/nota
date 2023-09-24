const pageList = document.getElementById("pageList");

const sortable = new Sortable(pageList, {
  animation: 500,
  delay: 350,
  onEnd: function(evt) {
    const updatedPageTitles = Array.from(pageList.getElementsByTagName("a")).map(link => link.textContent);
    savePageOrder(updatedPageTitles);
  },
});

function savePageOrder(pageOrder) {
  localStorage.setItem("pageOrder", JSON.stringify(pageOrder));
}

function loadPageOrder() {
  const savedPageOrder = JSON.parse(localStorage.getItem("pageOrder")) || [];
  savedPageOrder.forEach(title => {
    const listItem = Array.from(pageList.getElementsByTagName("a")).find(link => link.textContent === title);
    if (listItem) {
      pageList.appendChild(listItem.parentNode);
    }
  });
}

function createPage() {
  const pageTitle = document.getElementById("pageTitle").value;
  if (pageTitle.trim() !== "") {
    const pageListItem = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.href = `page.html?title=${pageTitle}`;
    pageLink.textContent = pageTitle;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = function() {
      deletePage(pageTitle);
    };
    pageListItem.appendChild(pageLink);
    pageListItem.appendChild(deleteButton);
    const pageList = document.getElementById("pageList");
    pageList.appendChild(pageListItem);
    savePageTitle(pageTitle);
    document.getElementById("pageTitle").value = "";
  } else {
    Swal.fire({
      text: "رجاءًا قم بإدخال عنوان الملاحظة",
      confirmButtonText: "حسنًا"
    });
  }
}

function savePageTitle(title) {
  let pageTitles = JSON.parse(localStorage.getItem("pageTitles")) || [];
  pageTitles.push(title);
  localStorage.setItem("pageTitles", JSON.stringify(pageTitles));
}

function loadPageTitles() {
  let pageTitles = JSON.parse(localStorage.getItem("pageTitles")) || [];
  const pageList = document.getElementById("pageList");
  pageTitles.forEach(title => {
    const pageListItem = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.href = `page.html?title=${title}`;
    pageLink.textContent = title;
    pageListItem.appendChild(pageLink);
    pageList.appendChild(pageListItem);
  });
}

window.onload = function() {
  loadPageTitles();
  loadPageOrder();
}

function deletePage(pageTitle) {
  Swal.fire({
    text: `هل أنت متأكد من أنك تريد حذف\n"${pageTitle}"؟`,
    showDenyButton: true,
    confirmButtonText: "إلغاء",
    denyButtonText: "حذف",
  }).then((result) => {
    if (result.isDenied) {
      removePageTitle(pageTitle);
      const params = new URLSearchParams(window.location.search);
      localStorage.removeItem(`text-${pageTitle}`);
      const pageList = document.getElementById("pageList");
      const pageItem = document.querySelector(`a[href="page.html?title=${pageTitle}"]`).parentNode;
      pageList.removeChild(pageItem);
    }
  });
}

function removePageTitle(title) {
  let pageTitles = JSON.parse(localStorage.getItem("pageTitles")) || [];
  const index = pageTitles.indexOf(title);
  if (index !== -1) {
    pageTitles.splice(index, 1);
    localStorage.setItem("pageTitles", JSON.stringify(pageTitles));
  }
}

function loadPageTitles() {
  let pageTitles = JSON.parse(localStorage.getItem("pageTitles")) || [];
  const pageList = document.getElementById("pageList");
  pageTitles.forEach(title => {
    const pageListItem = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.href = `page.html?title=${title}`;
    pageLink.textContent = title;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = function() {
      deletePage(title);
    };
    pageListItem.appendChild(pageLink);
    pageListItem.appendChild(deleteButton);
    pageList.appendChild(pageListItem);
  });
}

/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
*/