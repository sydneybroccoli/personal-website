

const importHTML = (html_name) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = require(`html-loader!../../../assets/pages/components/_${html_name}.html`).trim();

  return tmp.firstChild;
};
const importJSON = (json_name) => { return require(`../../../assets/data/${json_name}.json`); };

const importPartial = (container_class, card_file, data_file) => {
  const cont = document.querySelector(`.${container_class}`);
  const card = importHTML(card_file);
  const data = importJSON(data_file);

  // CLEAR CONTAINER OF DIV ELEMENTS
  const contents = cont.querySelectorAll('div');
  contents.forEach(element => { element.remove(); })

  // ITERATED THROUGH JSON DATA
  data.forEach(element => {
    const tmpCARD = card.cloneNode(true);  // MUST CLONE NODE OR THE CARD WILL BE APPENDED EACH TIME!!!

    for (let key in element) {
      const tmpHTML = tmpCARD.querySelector(`.${key}`);

      // IF THE VALUE OF A KEY IS AN ARRAY
      // CREATE A LIST
      if(typeof(element[key]) !== "string") {
        // CREATE UL
        const content = document.createElement('ul');
        element[key].forEach(item => {
          for (let liKEY in item) {
            // INSERT LI FOR EACH ITEM
            const listITEM = document.createElement(`li`);

            // ASSIGN CLASS BASED ON OBJECT KEY
            listITEM.classList.add(`${liKEY}`);

            // INSERT HTML BASED ON OBJECT VALUE
            listITEM.insertAdjacentHTML('afterbegin', item[liKEY]);

            // INSERT LIST ITEM TO LIST
            content.insertAdjacentHTML('beforeend', listITEM.outerHTML);
          }
        });
        // RETURN VALUE TO CONTAINER
        tmpHTML.insertAdjacentHTML('afterbegin', content.outerHTML);
      // ELSE RETURN THE VALUE
      } else {
        tmpHTML.insertAdjacentHTML('afterbegin', element[key]);
      }
    }
    cont.insertAdjacentHTML('beforeend', tmpCARD.outerHTML);
  })
};

const importResume = () => {
  // EDUCATION
  importPartial('education-container', 'education', 'education');

  // EXPERIENCE
  importPartial('experience-container', 'experience', 'experience');

  // VOLUNTEERING
  importPartial('volunteer-container', 'volunteer', 'volunteer');

  // PUBLICATIONS
  importPartial('publications-container', 'publications', 'publications');

  // ORGANIZATIONS
  importPartial('organizations-container', 'organizations', 'organizations');

  // TECHNICAL SKILLS
  importPartial('skills-container', 'technical_skills', 'technical_skills');

}

export { importResume };
