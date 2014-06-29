var from = function (obj) {
  return obj;
}

var Meta = (function () {
  var commands = [
    'find', 'findOne',
    'from', 'where',
    'limit', 'orderBy',
    'having', 'select'
  ];
  return {
    from: function (obj) {
      return obj;
    },
    find: function () {

    },
    findOne: function () {

    },
    where: function () {

    },
    limit: function () {

    },
    orderBy: function () {

    },
    having: function () {

    },
    select: function () {

    }
  }
});