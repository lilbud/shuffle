fetch('/index.json')
    .then(response => response.json())
    .then(data => {
        // 2. Initialize Lunr and define fields to search
        const idx = lunr(function () {
            this.ref('url');     // The unique identifier for results
            this.field('title', { boost: 10 }); // Boost prioritizes title matches
            this.field('content');
            this.field('tags');

            // Provide data to the Lunr indexer
            data.forEach(function (doc) {
                this.add(doc);
            }, this);
        });

        // 3. Set up event listener on the input field
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.trim();
            searchResults.innerHTML = ''; // Clear previous results

            // Only search if the query is 2 or more characters
            if (query.length < 2) return;

            // 4. Perform the search
            const results = idx.search(query);

            // 5. Render results
            if (results.length > 0) {
                results.forEach(result => {
                    // Look up the full document details using the reference URL
                    const item = data.find(doc => doc.url === result.ref);

                    if (item) {
                        const li = document.createElement('li');
                        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
                        searchResults.appendChild(li);
                    }
                });
            } else {
                searchResults.innerHTML = '<li>No results found</li>';
            }
        });
    })
    .catch(err => console.error('Error loading search index:', err));