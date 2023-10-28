// Combined dataset containing book details and their categories
var combinedData = [
    {
        category: 'Art',
        book: { title: '12312jk sbdkfsd jkfhs kdf hsdjk fskdf jksdfk hsdjk fjksdf jksh', author: 'Author 1', image: 'images/book1.jpg' },
    },
    {
        category: 'Art',
        book: { title: 'Book 2', author: 'Author 2', image: 'images/book2.jpg' },
    },
    {
        category: 'Medicine',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    },
    {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    },
    {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    },
    {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    },
    {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    },
    {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    }, {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    }, {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    }, {
        category: 'Database',
        book: { title: 'Book 1', author: 'Author 1', image: 'images/book3.jpg' },
    },
];

// Sort the combined data by category
combinedData.sort((a, b) => (a.category > b.category ? 1 : -1));

// Function to create category cards dynamically
function createCategoryCards() {
    var categoryContainer = document.querySelector('.category-container');
    var categoryCardsContainer = document.createElement('div');
    categoryCardsContainer.className = 'category-cards snaps-inline';

    // Track the current category to create cards and sections
    var currentCategory = null;

    combinedData.forEach(function (item) {
        var category = item.category;

        // If the category changes, create a new category card and section
        if (category !== currentCategory) {
            // Create a new category card
            var categoryCard = document.createElement('button');
            categoryCard.className = 'card';

            var categoryLogo = document.createElement('div');
            categoryLogo.className = 'category-logo';

            var categoryIcon;
            switch (category) {
                case 'Art':
                    categoryIcon = 'palette';
                    break;
                case 'Medicine':
                    categoryIcon = 'stethoscope';
                    break;
                case 'Database':
                    categoryIcon = 'database';
                    break;
                case 'Database':
                    categoryIcon = 'database';
                    break;
                case 'Database':
                    categoryIcon = 'database';
                    break;
                case 'Database':
                    categoryIcon = 'database';
                    break;
                default:
                    categoryIcon = 'star'; 
            }

            categoryLogo.innerHTML = '<span class="material-symbols-rounded">' + categoryIcon + '</span>';

            var categoryNameElement = document.createElement('div');
            categoryNameElement.className = 'category-name';
            categoryNameElement.innerHTML = '<span>' + category + '</span>';

            var booksInCategory = combinedData.filter((item) => item.category === category);
            var bookCount = document.createElement('div');
            bookCount.className = 'category-count';
            bookCount.textContent = '(' + booksInCategory.length + ' Books)';

            categoryCard.appendChild(categoryLogo);
            categoryCard.appendChild(categoryNameElement);
            categoryCard.appendChild(bookCount);

            categoryCardsContainer.appendChild(categoryCard);

            // Create a new section for books in this category
            var booksContainer = document.querySelector('.books');
            var bookCatDiv = document.createElement('div');
            bookCatDiv.className = 'book-cat';

            var header = document.createElement('div');
            header.className = 'header';

            var textDiv = document.createElement('div');
            textDiv.className = 'text';

            var categoryTitle = document.createElement('h1');
            categoryTitle.textContent = category;

            var bookCountElement = document.createElement('span');
            bookCountElement.textContent = '(' + booksInCategory.length + ' Books)';

            textDiv.appendChild(categoryTitle);
            textDiv.appendChild(bookCountElement);

            var buttons = document.createElement('div');
            buttons.className = 'buttons';

            var expandButton = document.createElement('button');
            expandButton.className = 'expand';
            expandButton.innerHTML = '<span class="material-symbols-rounded" style="font-size: 2rem;">equal</span>';

            var leftButton = document.createElement('button');
            leftButton.id = category;
            leftButton.className = 'left';
            leftButton.innerHTML = '<span class="material-symbols-rounded" style="font-size: 2rem;">navigate_before</span>';

            var rightButton = document.createElement('button');
            rightButton.id = category;
            rightButton.className = 'right';
            rightButton.innerHTML = '<span class="material-symbols-rounded" style="font-size: 2rem;">navigate_next</span>';

            buttons.appendChild(expandButton);
            buttons.appendChild(leftButton);
            buttons.appendChild(rightButton);

            header.appendChild(textDiv);
            header.appendChild(buttons);
            
            bookCatDiv.appendChild(header);

            var bodyDiv = document.createElement('div');
            bodyDiv.className = 'body';

            // Create and append book elements with images
            booksInCategory.forEach(function (bookItem) {
                var book = bookItem.book;
                var bookDiv = document.createElement('div');
                bookDiv.className = 'book';

                var bookImage = document.createElement('img');
                bookImage.src = book.image;
                bookImage.alt = book.title;
                bookImage.width = 160;
                bookImage.height = 220;

                var bookTitle = document.createElement('h2');
                bookTitle.textContent = book.title;

                var bookAuthor = document.createElement('span');
                bookAuthor.textContent = '-' + book.author;

                bookDiv.appendChild(bookImage);
                bookDiv.appendChild(bookTitle);
                bookDiv.appendChild(bookAuthor);

                bodyDiv.appendChild(bookDiv);
            });

            bookCatDiv.appendChild(bodyDiv);
            booksContainer.appendChild(bookCatDiv);

            currentCategory = category;
        }
    });

    categoryContainer.appendChild(categoryCardsContainer);
}

document.fonts.ready.then(function () {
    // Call the function to create category cards and book sections
    createCategoryCards();
});
