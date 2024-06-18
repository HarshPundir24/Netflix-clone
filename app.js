document.addEventListener('DOMContentLoaded', function() {
    const trendingMoviesContainer = document.getElementById('trending-movies');
    const trendingSeriesContainer = document.getElementById('trending-series');
    const recommendedContentContainer = document.getElementById('recommended-content');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function fetchTrendingMovies() {
        // Simulate fetching data
        const trendingMovies = [
            { title: 'Thriller', image: 'images/movie1.jfif' },
            { title: 'Shadow And Bone', image: 'images/movie2.jfif' },
            { title: 'Annihilation', image: 'images/movie3.jfif' }
        ];
        displayContent(trendingMovies, trendingMoviesContainer);
    }

    function fetchTrendingSeries() {
        // Simulate fetching data
        const trendingSeries = [
            { title: 'Lucifer', image: 'images/series1.jpg' },
            { title: 'Money Heist', image: 'images/series2.jpg'},
            { title: 'Stranger Things', image: 'images/series3.jpg' }
        ];
        displayContent(trendingSeries, trendingSeriesContainer);
    }

    function fetchRecommendedContent() {
        // Simulate fetching data
        const recommendedContent = [
            { title: 'Intrusion', image: 'images/recommended1.jpg' },
            { title: 'AKA', image: 'images/recommended2.jpg' },
            { title: 'Sabrina', image: 'images/recommended3.jpg' }
        ];
        displayContent(recommendedContent, recommendedContentContainer);
    }

    function displayContent(contentList, container) {
        container.innerHTML = '';
        contentList.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.className = 'content-item';
            contentItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
            contentItem.addEventListener('click', () => {
                localStorage.setItem('selectedContent', JSON.stringify(item));
                window.location.href = 'details.html';
            });
            container.appendChild(contentItem);
        });
    }
    

    function searchContent() {
        const query = searchInput.value.toLowerCase();
        if (query) {
            // Simulate search results
            const searchResults = [
                { title: 'Search Result 1', image: 'images/search1.jpg' },
                { title: 'Search Result 2', image: 'images/search2.jpg' }
            ];
            displayContent(searchResults, recommendedContentContainer);
        }
    }

    searchButton.addEventListener('click', searchContent);

    fetchTrendingMovies();
    fetchTrendingSeries();
    fetchRecommendedContent();
});

