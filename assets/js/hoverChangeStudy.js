export function hoverChangeStudy(
  nameCard,
  changeDescription,
  titleStudy,
  companyStudy,
  dateStudy
) {
  const varChangeDescription = document.querySelector(".changeStudy");
  const varTitleStudy = document.querySelector(".titleStudy");
  const varCompanyStudy = document.querySelector(".companyStudy");
  const varDateStudy = document.querySelector(".dateStudy");

  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = changeDescription;
    varCompanyStudy.innerHTML = companyStudy;
    varTitleStudy.innerHTML = titleStudy;
    varDateStudy.innerHTML = dateStudy;
  });
}

const header = document.getElementById("study-company");
const btns = header.getElementsByClassName("company");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeStudy");
    current[0].className = current[0].className.replace(
      " activeStudy",
      ""
    );
    this.className += " activeStudy";
  });
}