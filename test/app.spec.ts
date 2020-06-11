import * as sinon from 'sinon'
import 'mocha'
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app/app'
import moment from 'moment'

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('health check', () => {
  before(function () {
    this.clock = sinon.useFakeTimers(new Date(2012, 1, 10).getTime())
  })

  after(function () {
    this.clock.restore()
  })

  it('should get all students record', (done) => {
    chai.request(app)
      .get('/health_check')
      .end((err, res) => {
        chai.assert(err === null)
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.status.should.have.string('server_ok')
        chai.assert(moment.utc().unix() - 1 <= res.body.timestamp
          && res.body.timestamp <= moment.utc().unix())

        done()
      })
  })
})
