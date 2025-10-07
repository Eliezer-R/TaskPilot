import { Link } from 'react-router-dom'
import BackendWarningToast from './Warning'

export default function Home () {
  return (
    <>
      <BackendWarningToast />
      <div className='app-container'>
        <div className='bg-animated'>
          <div className='bg-circle bg-circle-1' />
          <div className='bg-circle bg-circle-2' />
          <div className='bg-circle bg-circle-3' />
        </div>

        <header className='header'>
          <div className='header-container'>
            <div className='header-logo'>
              <div className='logo-icon-wrapper'>
                <div className='logo-icon-blur' />
                <div className='logo-icon'>
                  <svg viewBox='0 0 24 24' width='28' height='28' stroke='white' strokeWidth='2' fill='none'>
                    <path d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
                  </svg>
                </div>
              </div>
              <div className='logo-title'>
                My Task Board
                <span className='pro-badge'>Pro</span>
              </div>
            </div>
            <div className='header-buttons'>
              <Link to='/register'>
                <button className='btn btn-register'>
                  <svg viewBox='0 0 24 24' width='16' height='16' stroke='currentColor' strokeWidth='2' fill='none'>
                    <path d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                  Register
                </button>
              </Link>
              <Link to='/login'>
                <button className='btn btn-login'>Login</button>
              </Link>
            </div>
          </div>
        </header>

        <div className='hero-section'>
          <div className='hero-content'>
            <div className='hero-badge'>
              <svg viewBox='0 0 24 24' width='16' height='16' stroke='#d8b4fe' strokeWidth='2' fill='none'>
                <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
              </svg>
              <span className='hero-badge-text'>Boost Your Productivity</span>
            </div>

            <h2 className='hero-title'>
              <div className='hero-title-line1'>Welcome to the</div>
              <div className='hero-title-line2'>tasks board</div>
            </h2>

            <p className='hero-description'>
              Welcome everyone to the notes application. This application can only be accessed through login or registration. This is done so that we can test the endpoints.
            </p>

            <div className='stats-grid'>
              <div className='stat-card'>
                <div className='stat-number'>250+</div>
                <div className='stat-label'>Active Users</div>
              </div>
              <div className='stat-card'>
                <div className='stat-number'>1.2K</div>
                <div className='stat-label'>Tasks Created</div>
              </div>
              <div className='stat-card'>
                <div className='stat-number'>98%</div>
                <div className='stat-label'>Satisfaction</div>
              </div>
            </div>
          </div>

          <div className='task-board-container'>
            <div className='task-board-wrapper'>
              <div className='task-board-blur' />
              <div className='task-board'>
                <div className='board-decoration-1' />
                <div className='board-decoration-2' />

                <div className='board-header'>
                  <h3 className='board-title'>Tasks to keep organized</h3>
                  <div className='board-badge'>
                    <span className='board-badge-text'>4 Tasks</span>
                  </div>
                </div>

                <div className='tasks-container'>
                  <div className='task-card task-progress'>
                    <div className='task-card-content'>
                      <div className='task-icon'>
                        <svg viewBox='0 0 24 24' width='24' height='24' stroke='white' strokeWidth='2' fill='none'>
                          <circle cx='12' cy='12' r='10' />
                          <polyline points='12 6 12 12 16 14' />
                        </svg>
                      </div>
                      <div className='task-info'>
                        <h4 className='task-title'>Task in Progress</h4>
                        <span className='task-status'>In Progress</span>
                      </div>
                    </div>
                  </div>

                  <div className='task-card task-completed'>
                    <div className='task-card-content'>
                      <div className='task-icon'>
                        <svg viewBox='0 0 24 24' width='24' height='24' stroke='white' strokeWidth='2' fill='none'>
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                          <polyline points='22 4 12 14.01 9 11.01' />
                        </svg>
                      </div>
                      <div className='task-info'>
                        <h4 className='task-title'>Task Completed</h4>
                        <span className='task-status'>Completed</span>
                      </div>
                    </div>
                  </div>

                  <div className='task-card task-wont-do'>
                    <div className='task-card-content'>
                      <div className='task-icon'>
                        <svg viewBox='0 0 24 24' width='24' height='24' stroke='white' strokeWidth='2' fill='none'>
                          <circle cx='12' cy='12' r='10' />
                          <line x1='15' y1='9' x2='9' y2='15' />
                          <line x1='9' y1='9' x2='15' y2='15' />
                        </svg>
                      </div>
                      <div className='task-info'>
                        <h4 className='task-title'>Task Won't Do</h4>
                        <span className='task-status'>Won't Do</span>
                      </div>
                    </div>
                  </div>

                  <div className='task-card task-todo'>
                    <div className='task-card-content'>
                      <div className='task-icon'>
                        <svg viewBox='0 0 24 24' width='24' height='24' stroke='white' strokeWidth='2' fill='none'>
                          <circle cx='12' cy='12' r='10' />
                        </svg>
                      </div>
                      <div className='task-info'>
                        <h4 className='task-title'>Task To Do</h4>
                        <p className='task-description'>Work on a Challenge on devChallenges.io, learn TypeScript.</p>
                        <span className='task-status'>To Do</span>
                      </div>
                    </div>
                  </div>

                  <button className='add-task-btn'>
                    <div className='add-task-content'>
                      <div className='add-task-icon-wrapper'>
                        <div className='add-task-icon-blur' />
                        <div className='add-task-icon'>
                          <svg viewBox='0 0 24 24' width='24' height='24' stroke='white' strokeWidth='2' fill='none'>
                            <line x1='12' y1='5' x2='12' y2='19' />
                            <line x1='5' y1='12' x2='19' y2='12' />
                          </svg>
                        </div>
                      </div>
                      <span className='add-task-text'>Add new task</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='features-grid'>
            <div className='feature-card'>
              <div className='feature-icon feature-icon-purple'>
                <svg viewBox='0 0 24 24' width='24' height='24' stroke='#d8b4fe' strokeWidth='2' fill='none'>
                  <path d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
                </svg>
              </div>
              <h4 className='feature-title'>Smart Organization</h4>
              <p className='feature-description'>Keep your tasks organized with intelligent categorization</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon feature-icon-blue'>
                <svg viewBox='0 0 24 24' width='24' height='24' stroke='#93c5fd' strokeWidth='2' fill='none'>
                  <path d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h4 className='feature-title'>Lightning Fast</h4>
              <p className='feature-description'>Experience blazing fast performance and smooth interactions</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon feature-icon-pink'>
                <svg viewBox='0 0 24 24' width='24' height='24' stroke='#f9a8d4' strokeWidth='2' fill='none'>
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                </svg>
              </div>
              <h4 className='feature-title'>Track Progress</h4>
              <p className='feature-description'>Monitor your productivity and achieve your goals</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
