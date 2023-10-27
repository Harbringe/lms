// Sample data for category cards
var categories = [
    { icon: 'palette', name: 'Art', count: '1,235 Books' },
    { icon: 'stethoscope', name: 'Medicine', count: '2,535 Books' },
    { icon: 'public', name: 'History', count: '13,232 Books' },
    { icon: 'biotech', name: 'Science', count: '5,285 Books' },
    { icon: 'trending_up', name: 'Trading', count: '251 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' },
    { icon: 'database', name: 'Database', count: '6,256 Books' }
];

// Function to create category cards dynamically
function createCategoryCards() {
    var categoryContainer = document.querySelector('.category-container');
    var categoryCardsContainer = document.createElement('div');
    categoryCardsContainer.className = 'category-cards snaps-inline';

    categories.forEach(function (category) {
        var categoryCard = document.createElement('button');
        categoryCard.className = 'card';

        var categoryLogo = document.createElement('div');
        categoryLogo.className = 'category-logo';
        categoryLogo.innerHTML = '<span class="material-symbols-rounded">' + category.icon + '</span>';

        var categoryNameElement = document.createElement('div');
        categoryNameElement.className = 'category-name';
        categoryNameElement.innerHTML = '<span>' + category.name + '</span>';

        var categoryCount = document.createElement('div');
        categoryCount.className = 'category-count';
        categoryCount.innerHTML = '<span>' + category.count + '</span>';

        categoryCard.appendChild(categoryLogo);
        categoryCard.appendChild(categoryNameElement);
        categoryCard.appendChild(categoryCount);

        categoryCardsContainer.appendChild(categoryCard);
    });

    categoryContainer.appendChild(categoryCardsContainer);
}

// Function to create the "Books" section dynamically for a specific category
function createBooksSection(category) {
    var booksContainer = document.querySelector('.books');
    
    var bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    var header = document.createElement('div');
    header.className = 'header';

    var textDiv = document.createElement('div');
    textDiv.className = 'text';

    var categoryTitle = document.createElement('h1');
    categoryTitle.textContent = category.name;

    var bookCountElement = document.createElement('span');
    bookCountElement.textContent = `(${category.count})`;

    var buttons = document.createElement('div');
    buttons.className = 'buttons';

    var expandButton = document.createElement('button');
    expandButton.className = 'expand';
    expandButton.innerHTML = '<span class="material-symbols-rounded" style="font-size: 2rem;">' + 'equal' + '</span';

    var leftButton = document.createElement('button');
    leftButton.id = category.name;
    leftButton.className = 'left';
    leftButton.innerHTML = '<span class="material-symbols-rounded" style="font-size: 2rem;">' + 'navigate_before' + '</span>';

    var rightButton = document.createElement('button');
    rightButton.id = category.name;
    rightButton.className = 'right';
    rightButton.innerHTML = '<span class="material-symbols-rounded" style="font-size: 2rem;">' + 'navigate_next' + '</span>';

    textDiv.appendChild(categoryTitle);
    textDiv.appendChild(bookCountElement);

    buttons.appendChild(expandButton);
    buttons.appendChild(leftButton);
    buttons.appendChild(rightButton);

    header.appendChild(textDiv);
    header.appendChild(buttons);

    bookDiv.appendChild(header);

    var bodyDiv = document.createElement('div');
    bodyDiv.className = 'body';

    // Add content to the body if needed

    bookDiv.appendChild(bodyDiv);

    booksContainer.appendChild(bookDiv);
}

document.fonts.ready.then(function () {
    // Call the function to create category cards
    createCategoryCards();
    
    // Call the function to create the "Books" section dynamically for each category in the array
    categories.forEach(function (category) {
        createBooksSection(category);
    });
});
