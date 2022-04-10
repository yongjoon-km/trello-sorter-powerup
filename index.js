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
            var sortedCards = opts.cards.sort((a, b) => {
              if (a.members.length === 0) {
                return 1;
              }
              if (b.members.length === 0) {
                return -1;
              }
              if (a.members.length !== b.members.length) {
                return b.members.length - a.members.length;
              }
              return a.members[0] - b.members[0];
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
