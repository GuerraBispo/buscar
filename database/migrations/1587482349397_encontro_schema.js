'use strict'


const Schema = use('Schema')

class EncontroSchema extends Schema {
  up () {
    this.create('encontros', (table) => {
      table.increments()
      table.string('nome')
      table.string('descricao')
      table.string('latitude')
      table.string('longitude')
      table.timestamps()
    })
  }

  down () {
    this.drop('encontros')
  }
}

module.exports = EncontroSchema
