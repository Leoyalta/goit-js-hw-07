const categorisList = document.querySelectorAll('.item');
console.log (`Number of categories: ${categorisList.length}`);
categorisList.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryTitle}`);
    const listItems = item.querySelectorAll('li').length;
    console.log(`Elements: ${listItems}`);
})

