window.TrelloPowerUp.initialize({
  "list-sorters": function (t) {
    return t.list("name", "id").then(function (list) {
      return [
        {
          text: "Card Name",
          callback: function (t, opts) {
            console.log(opts);
            // Trello will call this if the user clicks on this sort
            // opts.cards contains all card objects in the list
            var sortedCards = opts.cards.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              } else if (b.name > a.name) {
                return -1;
              }
              return 0;
            });

            return {
              sortedIds: sortedCards.map(function (c) {
                return c.id;
              }),
            };
          },
        },
      ];
    });
  },
});
