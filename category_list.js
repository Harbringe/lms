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

// Call the function to create category cards
createCategoryCards();
