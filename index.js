window.TrelloPowerUp.initialize({
  "list-sorters": function (t) {
    return t.list("name", "id").then(() => {
      return [
        {
          text: "Members",
          callback: (_t, opts) => {
            // Trello will call this if the user clicks on this sort
            // opts.cards contains all card objects in the list
            const sortedCards = opts.cards.sort(memberComparator);

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

function memberComparator({ members: membersA }, { members: membersB }) {
  // if length 0, go to last
  if (membersA.length === 0) {
    return 1;
  }
  if (membersB.length === 0) {
    return -1;
  }
  // bigger length go first
  if (membersA.length !== membersB.length) {
    return membersB.length - membersA.length;
  }
  // sort by member Id
  return membersA[0] - membersB[0];
}
