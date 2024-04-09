function selectAll(selectAll)  {
    const checkboxes 
         = document.getElementsByName('full');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    })
  }
function selectAll2(selectAll2)  {
    const checkboxes2 
         = document.getElementsByName('full2');
    
    checkboxes2.forEach((checkbox) => {
      checkbox.checked = selectAll2.checked;
    })
  }