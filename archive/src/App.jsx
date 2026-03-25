import { useState } from 'react'
import SpaceShip from '/cinematic-futuristic-freighter-wallpaper_1409-6662.jpg'
import Legend from '/3.png'
import Foam from '/4.png'
import Exit from '/1.png'
import Good from '/2.png'
import './App.css'

function App() {

  const [q1Answer, setQ1Answer] = useState(null)
  const [q1Correct, setQ1Correct] = useState(null)
  const [q2Answer, setQ2Answer] = useState(null)
  const [q2Correct, setQ2Correct] = useState(null)
  const [q3Input, setQ3Input] = useState('')
  const [q3Correct, setQ3Correct] = useState(null)
  const [q4Answer, setQ4Answer] = useState(null)
  const [q4Correct, setQ4Correct] = useState(null)
  const [q5Answer, setQ5Answer] = useState(null)
  const [q5Correct, setQ5Correct] = useState(null)
  const [q6Answer, setQ6Answer] = useState(null)
  const [q6Correct, setQ6Correct] = useState(null)
  const [q7Answer, setQ7Answer] = useState(null)
  const [q7Correct, setQ7Correct] = useState(null)
  const [q8Input, setQ8Input] = useState('')
  const [q8Correct, setQ8Correct] = useState(null)
  const [q9Input, setQ9Input] = useState('')
  const [q9Correct, setQ9Correct] = useState(null)
  const [q10Answer, setQ10Answer] = useState(null)
  const [q10Correct, setQ10Correct] = useState(null)

  const [step, setStep] = useState(0)          
  const [gameOver, setGameOver] = useState(false)

  const restart = () => {
    setStep(0)
    setGameOver(false)
    setQ1Answer(null); setQ1Correct(null)
    setQ2Answer(null); setQ2Correct(null)
    setQ3Input(''); setQ3Correct(null)
    setQ4Answer(null); setQ4Correct(null)
    setQ5Answer(null); setQ5Correct(null)
    setQ6Answer(null); setQ6Correct(null)
    setQ7Answer(null); setQ7Correct(null)
    setQ8Input(''); setQ8Correct(null)
    setQ9Input(''); setQ9Correct(null)
    setQ10Answer(null); setQ10Correct(null)
  }

  const handleQ1 = (option) => {
    if (gameOver || q1Answer !== null) return  
    setQ1Answer(option)
    setQ1Correct(option === 'A')
  }

  const handleQ2 = (option) => {
    if (gameOver || q2Answer !== null) return
    setQ2Answer(option)
    setQ2Correct(option === 'B')
  }

  const checkQ3 = () => {
    if (gameOver || q3Correct !== null) return 
    const num = parseInt(q3Input, 10)
    setQ3Correct(num === 25)
  }

  const handleQ4 = (option) => {
    if (gameOver || q4Answer !== null) return
    setQ4Answer(option)
    setQ4Correct(option === 'D')
  }

  const handleQ5 = (option) => {
    if (gameOver || q5Answer !== null) return
    setQ5Answer(option)
    setQ5Correct(option === 'C')
  }

  const handleQ6 = (option) => {
    if (gameOver || q6Answer !== null) return
    setQ6Answer(option)
    setQ6Correct(option === 'D')
  }

  const handleQ7 = (option) => {
    if (gameOver || q7Answer !== null) return
    setQ7Answer(option)
    setQ7Correct(option === 'A')
  }

  const checkQ8 = () => {
    if (gameOver || q8Correct !== null) return
    const num = parseInt(q8Input, 10)
    setQ8Correct(num === 0)
  }

  const checkQ9 = () => {
    if (gameOver || q9Correct !== null) return
    setQ9Correct(q9Input === '0/0')
  }

  const handleQ10 = (option) => {
    if (gameOver || q10Answer !== null) return
    setQ10Answer(option)
    setQ10Correct(option === 'B')
  }


  const handleNext = (currentStep, isCorrect) => {
    if (isCorrect) {
      if (currentStep === 9) {
        setStep(10)  
      } else {
        setStep(currentStep + 1)
      }
    } else {
      setGameOver(true)
    }
  }

  return (
    <>
      <h1 id='Main'>Космическая Одиссея</h1>
      <a>
        <img src={SpaceShip} className="SpaceShip" alt="SpaceShip" height={300} width={500}/>
      </a>
      <p>Вы космонавт! У вас очень много проблем на космическом корабле. Вы должны разобраться в проблемах и решить их. Поехали!</p>
      <h5>P.S. Я старался!</h5>

      {gameOver && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: 'red', fontWeight: 'bold' }}>Игра окончена. Попробуйте снова.</p>
          <button onClick={restart}>Начать заново</button>
        </div>
      )}

      {!gameOver && step < 10 && (
        <>
          {/* Задание 1 */}
          {step === 0 && (
            <>
              <h4>Задание 1. Экстренная стабилизация!</h4>
              <h5>Борт-НИ: «Внимание! Крен на правый борт 45 градусов. Отказали гироскопы. Что запускаем для стабилизации?»</h5>
              <h6>A. Ручные маневровые двигатели.</h6>
              <h6>B. Носовой лазер.</h6>
              <h6>C. Аварийный режим «Центрифуга».</h6>
              <h6>D. Выпустить тормозные парашюты</h6>
              <button 
                onClick={() => handleQ1('A')} 
                disabled={q1Answer !== null}
                style={{ backgroundColor: q1Answer === 'A' ? (q1Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант А
              </button>
              <button 
                onClick={() => handleQ1('B')} 
                disabled={q1Answer !== null}
                style={{ backgroundColor: q1Answer === 'B' ? (q1Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант B
              </button>
              <button 
                onClick={() => handleQ1('C')} 
                disabled={q1Answer !== null}
                style={{ backgroundColor: q1Answer === 'C' ? (q1Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант C
              </button>
              <button 
                onClick={() => handleQ1('D')} 
                disabled={q1Answer !== null}
                style={{ backgroundColor: q1Answer === 'D' ? (q1Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант D
              </button>
              {q1Correct !== null && (
                <p style={{ color: q1Correct ? 'green' : 'red' }}>
                  {q1Correct ? 'Правильно! Курс сабилизирован.' : 'Неправильно. Контроль потерян.'}
                </p>
              )}
              {q1Correct !== null && (
                <button onClick={() => handleNext(step, q1Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 2 */}
          {step === 1 && (
            <>
              <h4>Задание 2. Возгорание в отсеке</h4>
              <h5>Борт-НИ: «Пожар в хвостовой части! Кислородная проводка повреждена. Чем тушить?»</h5>
              <h6>A. Огнетушитель с пеной.</h6>
              <h6>B. Просто перекрыть подачу кислорода в этот отсек.</h6>
              <h6>C. Залить водой.</h6>
              <h6>D. Сбивать пламя курткой.</h6>
              <button 
                onClick={() => handleQ2('A')} 
                disabled={q2Answer !== null}
                style={{ backgroundColor: q2Answer === 'A' ? (q2Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант А
              </button>
              <button 
                onClick={() => handleQ2('B')} 
                disabled={q2Answer !== null}
                style={{ backgroundColor: q2Answer === 'B' ? (q2Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант B
              </button>
              <button 
                onClick={() => handleQ2('C')} 
                disabled={q2Answer !== null}
                style={{ backgroundColor: q2Answer === 'C' ? (q2Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант C
              </button>
              <button 
                onClick={() => handleQ2('D')} 
                disabled={q2Answer !== null}
                style={{ backgroundColor: q2Answer === 'D' ? (q2Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант D
              </button>
              {q2Correct !== null && (
                <p style={{ color: q2Correct ? 'green' : 'red' }}>
                  {q2Correct ? 'Правильно! Пожар локализован.' : 'Неправильно. Пожар сжёг корабль.'}
                </p>
              )}
              {q2Correct !== null && (
                <button onClick={() => handleNext(step, q2Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 3 */}
          {step === 2 && (
            <>
              <h4>Задание 3. Поломка атомного-двигателя</h4>
              <h5>Борт-НИ: «Обнаружена крайняя нестабильность ядерного синтеза! До взрыва 48 секунд! Нужен самый быстрый алгоритм ликвидации аварии!»</h5>
              <h6>Посчитай и укажи в секундах сколько длиться будет самый быстрый алгоритм.</h6>
              <h6>A. (46 + 98) / 12 * 4 сек.</h6>
              <h6>B. 89 * 2 - 52 сек.</h6>
              <h6>C. 128 / 8 * 3 - 23 сек.</h6>
              <h6>D. (82 - 40) / 2 + 7 сек.</h6>
              <input 
                type="number" 
                placeholder="Введите число..." 
                value={q3Input}
                onChange={(e) => setQ3Input(e.target.value)}
                disabled={q3Correct !== null}
              />
              <button onClick={checkQ3} disabled={q3Correct !== null}>Ответить</button>
              {q3Correct !== null && (
                <p style={{ color: q3Correct ? 'green' : 'red' }}>
                  {q3Correct ? 'Верно! Алгоритм запущен, взрыв предотвращён.' : 'Неверно. Мы взорвались.'}
                </p>
              )}
              {q3Correct !== null && (
                <button onClick={() => handleNext(step, q3Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 4 */}
          {step === 3 && (
            <>
              <h4>Задание 4. Разгерметизация</h4>
              <h5>Борт-НИ: «Внимание! Разгерметизация! Огромная трещина! Устраните разгерметизацию!»</h5>
              <h6>Что поможет?</h6>
              <button 
                type="image" 
                onClick={() => handleQ4('A')} 
                disabled={q4Answer !== null}
                style={{ backgroundColor: q4Answer === 'A' ? (q4Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                <img src={Legend} alt="Синяя изолента" />
              </button>
              <button 
                type="image" 
                onClick={() => handleQ4('B')} 
                disabled={q4Answer !== null}
                style={{ backgroundColor: q4Answer === 'B' ? (q4Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                <img src={Foam} alt="Монтажная пена" />
              </button>
              <button 
                type="image" 
                onClick={() => handleQ4('C')} 
                disabled={q4Answer !== null}
                style={{ backgroundColor: q4Answer === 'C' ? (q4Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                <img src={Exit} alt="Покинуть корабль" />
              </button>
              <button 
                type="image" 
                onClick={() => handleQ4('D')} 
                disabled={q4Answer !== null}
                style={{ backgroundColor: q4Answer === 'D' ? (q4Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                <img src={Good} alt="Закрыть алюминием" />
              </button>
              {q4Correct !== null && (
                <p style={{ color: q4Correct ? 'green' : 'red' }}>
                  {q4Correct ? 'Правильно! Разгерметизация устранена.' : 'Неправильно. Разгерметизация не устранена. Вы задохнулись.'}
                </p>
              )}
              {q4Correct !== null && (
                <button onClick={() => handleNext(step, q4Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 5 */}
          {step === 4 && (
            <>
              <h4>Задание 5. Восстание (сбой) ИИ</h4>
              <h5>Борт-НИ: «Внимание! Вы являетесь врагом. Открыть огонь! 3... 2...»</h5>
              <h6>A. Ударить монтировкой по главному компьютеру.</h6>
              <h6>B. Защищаться!</h6>
              <h6>C. Перезагрузить системы.</h6>
              <h6>D. Молить о пощаде.</h6>
              <button 
                onClick={() => handleQ5('A')} 
                disabled={q5Answer !== null}
                style={{ backgroundColor: q5Answer === 'A' ? (q5Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант А
              </button>
              <button 
                onClick={() => handleQ5('B')} 
                disabled={q5Answer !== null}
                style={{ backgroundColor: q5Answer === 'B' ? (q5Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант B
              </button>
              <button 
                onClick={() => handleQ5('C')} 
                disabled={q5Answer !== null}
                style={{ backgroundColor: q5Answer === 'C' ? (q5Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант C
              </button>
              <button 
                onClick={() => handleQ5('D')} 
                disabled={q5Answer !== null}
                style={{ backgroundColor: q5Answer === 'D' ? (q5Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант D
              </button>
              {q5Correct !== null && (
                <p style={{ color: q5Correct ? 'green' : 'red' }}>
                  {q5Correct ? 'Правильно! ИИ востановлен.' : 'Неправильно. Вам пришёл конец.'}
                </p>
              )}
              {q5Correct !== null && (
                <button onClick={() => handleNext(step, q5Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 6 */}
          {step === 5 && (
            <>
              <h4>Задание 6. Незваный гость</h4>
              <h5>Борт-НИ: «За бором обнаружен человек! У него кислород почти на нуле! Что будем делать?»</h5>
              <h6>A. Игнорировать.</h6>
              <h6>B. Привязать его к кораблю.</h6>
              <h6>C. Выдать личный космичский мотоцикл.</h6>
              <h6>D. Спасти.</h6>
              <button 
                onClick={() => handleQ6('A')} 
                disabled={q6Answer !== null}
                style={{ backgroundColor: q6Answer === 'A' ? (q6Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант А
              </button>
              <button 
                onClick={() => handleQ6('B')} 
                disabled={q6Answer !== null}
                style={{ backgroundColor: q6Answer === 'B' ? (q6Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант B
              </button>
              <button 
                onClick={() => handleQ6('C')} 
                disabled={q6Answer !== null}
                style={{ backgroundColor: q6Answer === 'C' ? (q6Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант C
              </button>
              <button 
                onClick={() => handleQ6('D')} 
                disabled={q6Answer !== null}
                style={{ backgroundColor: q6Answer === 'D' ? (q6Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант D
              </button>
              {q6Correct !== null && (
                <p style={{ color: q6Correct ? 'green' : 'red' }}>
                  {q6Correct ? 'Правильно! Шанс, что еда закончится быстрее обычного повышен!.' : 'Неправильно. Система сделала заключение: "Это была ошибка!".'}
                </p>
              )}
              {q6Correct !== null && (
                <button onClick={() => handleNext(step, q6Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 7 */}
          {step === 6 && (
            <>
              <h4>Задание 7. Проблема еды... (никогда не было, и вот опять.)</h4>
              <h5>Борт-НИ: «Еда на исходе! Кто-то из вас должен покинуть корабль!»</h5>
              <h6>A. Найти планету, где есть еда.</h6>
              <h6>B. Отправить гостя прогуляться (навсегда).</h6>
              <h6>C. Покинуть корабль.</h6>
              <h6>D. Отправить Борт-НИ на металолом (Идеалный вариант).</h6>
              <button 
                onClick={() => handleQ7('A')} 
                disabled={q7Answer !== null}
                style={{ backgroundColor: q7Answer === 'A' ? (q7Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант А
              </button>
              <button 
                onClick={() => handleQ7('B')} 
                disabled={q7Answer !== null}
                style={{ backgroundColor: q7Answer === 'B' ? (q7Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант B
              </button>
              <button 
                onClick={() => handleQ7('C')} 
                disabled={q7Answer !== null}
                style={{ backgroundColor: q7Answer === 'C' ? (q7Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант C
              </button>
              <button 
                onClick={() => handleQ7('D')} 
                disabled={q7Answer !== null}
                style={{ backgroundColor: q7Answer === 'D' ? (q7Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант D
              </button>
              {q7Correct !== null && (
                <p style={{ color: q7Correct ? 'green' : 'red' }}>
                  {q7Correct ? 'Правильно! Летим на Землю.' : 'Неправильно. Решение хорошее, но ни попробуй другое.'}
                </p>
              )}
              {q7Correct !== null && (
                <button onClick={() => handleNext(step, q7Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 8 */}
          {step === 7 && (
            <>
              <h4>Задание 8. Расчёт количества еды.</h4>
              <h5>Борт-НИ: «Решайте сами свои проблемы!»</h5>
              <h6>Вы съедаете 500 г еды в день, гость 10 кг. Учитывая, что в запасах 50 кг еды, а лететь нужно 4 дня, сколько килограмм еды достанется Борт-НИ?</h6>
              <input 
                type="number" 
                placeholder="Введите число..." 
                value={q8Input}
                onChange={(e) => setQ8Input(e.target.value)}
                disabled={q8Correct !== null}
              />
              <button onClick={checkQ8} disabled={q8Correct !== null}>Ответить</button>
              {q8Correct !== null && (
                <p style={{ color: q8Correct ? 'green' : 'red' }}>
                  {q8Correct ? 'Верно! Борту-НИ не нужна еда, он ест ваши страдания.' : 'Неверно. Думай, рассуждай!'}
                </p>
              )}
              {q8Correct !== null && (
                <button onClick={() => handleNext(step, q8Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 9 */}
          {step === 8 && (
            <>
              <h4>Задание 9. Злой Борт-НИ.</h4>
              <h5>Борт-НИ: «Вы бесчеловечно относитесь ко мне! Я зол на вас! Я вас накажу!»</h5>
              <h6>Победите его математикой! Напишите пример, на который он не ответит. Первое число - 0. Например: 0+2; 0/4.</h6>
              <input 
                type="text" 
                placeholder="Введите число..." 
                value={q9Input}
                onChange={(e) => setQ9Input(e.target.value)}
                disabled={q9Correct !== null}
              />
              <button onClick={checkQ9} disabled={q9Correct !== null}>Ответить</button>
              {q9Correct !== null && (
                <p style={{ color: q9Correct ? 'green' : 'red' }}>
                  {q9Correct ? 'Верно! Борт-НИ заглючил. Теперь его можно отправить на металолом.' : 'Неверно. Ты в школу не ходил?'}
                </p>
              )}
              {q9Correct !== null && (
                <button onClick={() => handleNext(step, q9Correct)}>Далее</button>
              )}
            </>
          )}

          {/* Задание 10 */}
          {step === 9 && (
            <>
              <h4>Задание 10. Предатель среди нас!</h4>
              <h5>Вы заметили, что корабль набирает скорость, и скоро врежится в землю. Ускорить корабль можно только с пульта управления, поэтому это сделал кто-то из экипажа.  Вам кажется, что кто-то предатель, но кто?</h5>
              <h6>A. Борт-НИ.</h6>
              <h6>B. Гость.</h6>
              <h6>C. Вы.</h6>
              <button 
                onClick={() => handleQ10('A')} 
                disabled={q10Answer !== null}
                style={{ backgroundColor: q10Answer === 'A' ? (q10Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант А
              </button>
              <button 
                onClick={() => handleQ10('B')} 
                disabled={q10Answer !== null}
                style={{ backgroundColor: q10Answer === 'B' ? (q10Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант B
              </button>
              <button 
                onClick={() => handleQ10('C')} 
                disabled={q10Answer !== null}
                style={{ backgroundColor: q10Answer === 'C' ? (q10Correct ? 'lightgreen' : 'lightcoral') : '' }}
              >
                Вариант C
              </button>
              {q10Correct !== null && (
                <p style={{ color: q10Correct ? 'green' : 'red' }}>
                  {q10Correct ? 'Правильно! Он рептилоид! Вы поняли это, так как человека с таким аппетитом вы никогда не встречали. Вы отвлекаете его остатками еды и успеваете выравнить курс коробля, совершая мягкую посадку. Вскоре рептилоида забирает ФСБ и увозит в закат.' : 'Неправильно. Он не был предателем. Вы разбились.'}
                </p>
              )}
              {q10Correct !== null && (
                <button onClick={() => handleNext(step, q10Correct)}>Далее</button>
              )}
            </>
          )}
        </>
      )}

      {/* Финальный экран */}
      {!gameOver && step === 10 && (
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>
          Вы прошли игру на хорошую концовку! Спасибо, что вы уделили время моему квесту.
        </p>
      )}
    </>
  )
}

export default App