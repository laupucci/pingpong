const { conn } = require("../src/database.js");
const User = conn.model('user');
const Match = conn.model('match');
const UserPoints = conn.model('UserPoints');
const { getAllMatchesFromAnUser } = require('../src/controllers/user-controller')
const chai = require('chai')
const chaiProperties = require ('chai-properties');
const chaiThings = require('chai-things')
let chaiHttp = require('chai-http');
chai.use(chaiProperties);
chai.use(chaiThings);
chai.use(chaiHttp);
const expect = chai.expect;

describe(' Backend tests ', () => {

    beforeEach('Sincroniza y limpia tu base de datos', () => conn.sync({force: true}));

    after('Sincroniza y limpia tu base de datos', () => conn.sync({force: true}));

    describe('Modelos Sequlize', function () {

        describe('Modelo User', () => {

           //el modelo User tiene que poner una columna `email` en la tabla users.
            it('tiene la definición de schema esperado --email', () => {
                console.log(User);
                expect(User.tableAttributes.email).to.be.an('object');
            });

            //el modelo User tiene que poner una columna `name` en la tabla users.
            it('tiene la definición de schema esperado --name', () => {
                console.log(User);
                expect(User.tableAttributes.name).to.be.an('object');
            });


            describe('validaciones', () => {

                // La columand `email` debería ser un campo requerido.
                it('user requiere email', () => {
                    const user = User.build();
                    return user.validate()
                        .then(() => { throw new Error('Promise should have rejected');})
                        .catch(err => {
                            expect(err).to.exist;
                            expect(err).to.be.an('error');
                            expect(err.errors).to.contain.a.thing.with.properties({
                                path: 'email',
                                type: 'notNull Violation'
                            });
                        });
                });

                 // La columand `name` debería ser un campo requerido.
                it('user requiere name', () => {
                  const user = User.build();
                    return user.validate()
                      .then(() => { throw new Error('Promise should have rejected');})
                      .catch(err => {
                          expect(err).to.exist;
                          expect(err).to.be.an('error');
                          expect(err.errors).to.contain.a.thing.with.properties({
                              path: 'name',
                              type: 'notNull Violation'
                          });
                      });
              });

            });

        });

        describe('Modelo Match', () => {

            describe('definición', () => {

                // espera que el modelo Match ponga una
                // columna `winDifference` en la tabla matches.
                it('tiene la definición de winDifference esperada', () => {
                    expect(Match.tableAttributes.winDifference).to.be.an('object');
                });

                // espera que el modelo Match vaya a
                // poner la columna `winner_id` en la tabla matches
                it('tiene la definición de winner_id esperada', () => {
                    expect(Match.tableAttributes.winner_id).to.be.an('object');
                });

                 // *Traducción del Assertion*:
                // Este assertion espera que el modelo Match vaya a
                // poner la columna `looser_id` en la tabla matches
                it('tiene la definición de looser_id esperada', () => {
                  expect(Match.tableAttributes.looser_id).to.be.an('object');
              });

            });

            describe('validaciones', () => {

                it('winner_id tiene un valor por defecto "null"', () => {
                    // .build crea una instancia de un modelo
                    // sin salvar la data representada a la base de datos.
                    const match = Match.build();
                    expect(match.winner_id).to.be.equal(null);
                });

                it('looser_id tiene un valor por defecto "null"', () => {
                  // .build crea una instancia de un modelo
                  // sin salvar la data representada a la base de datos.
                  const match = Match.build();
                  expect(match.looser_id).to.be.equal(null);
              });


            });
          })

            describe('funcionalidad', () => {

                let juanId;
                let marcosId;
                beforeEach('Seed users', () => {
                    const users = [
                        {name: 'Juan', email: 'juan@gmail.com', password: 'admin123'},
                        {name: 'Marcos', email: 'marcos@gmail.com', password: 'admin123'}
                    ];
                   return User.bulkCreate(users, {returning: true})
                        .then(createdUsers => {
                          juanId = createdUsers[0].id;
                          marcosId = createdUsers[1].id;
                        });
                });

                let firstMatch;
                beforeEach('First Match', () => {

                    const match = 
                        [{
                            winDifference: null,
                            winner_id: null ,
                            looser_id: null,
                            tie: false ,
                            state: null,
                        },]
    
                    return Match.bulkCreate(match, {returning: true})
                        .then(createdMatch => {
                                firstMatch = createdMatch[0].id;
                            });
        
                    });
                    let juanFirstMatch;
                    let marcosFirstMatch;
                    beforeEach('First UserPoints', async () => {
        const points = [
                        {

                            points: 0,
                            userId: juanId,
                            matchId: firstMatch,
                        },
                           {
                                points: 0,
                                userId: marcosId,
                                matchId: firstMatch,
                            },
                    ];

    return UserPoints.bulkCreate(points, {returning: true})
                        .then(createdUserPoints => {
                                juanFirstMatch = createdUserPoints[0];
                                marcosFirstMatch = createdUserPoints[1];
                            });
                        });
                describe('método', () => {

                    describe('getAllMatchesFromAnUser', () => {

                        it('existe', () => {
                            expect(getAllMatchesFromAnUser).to.be.a('function');
                        });

                        it('retorna una promise', () => {
                            expect(getAllMatchesFromAnUser().then).to.be.a('function');
                        });

    
                            // it('resuelve a todos los juegos de juan', () => {
                            // chai.request(`http://localhost:4000`)
                            // .get(`users/${juanId}/matches`)
                            // .end(function (err, res) {
                            //     expect(err).to.be.null;
                            //     expect(res).to.have.status(200);
                            //     done()
                            //  });
                            // })

                    })
                })
            })

});
})