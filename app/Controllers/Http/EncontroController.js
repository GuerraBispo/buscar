'use strict'

const Encontro = use('App/Models/Encontro')

class EncontroController {

  async index () {

    const encontro = await Encontro.all()

    return encontro

  }


  async store ({ request }) {

    const data = request.only(['nome','descricao','latitude','longitude'])

    const encontro = await Encontro.create({...data})

    return encontro

  }


  async show ({ params }) {

    const encontro = await Encontro.findOrFail(params.id)

    return encontro

  }


  async update ({ params, request }) {
    const encontro = await Encontro.findOrFail(params.id)
    const data = request.only(['nome','descricao','latitude','longitude'])

    encontro.merge(data)

    await encontro.save()

    return encontro
  }


  async destroy ({ params, request, response }) {

    const encontro = await Encontro.findOrFail(params.id)

    await encontro.delete()


  }
}

module.exports = EncontroController
