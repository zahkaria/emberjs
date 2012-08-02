FD.Photo = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    imageTitle: DS.attr('string'),
    imageUrl: DS.attr('string')
});
