import { getGuessStatuses } from '../../lib/statuses'
import { unicodeSplit } from '../../lib/words'
import { Cell } from './Cell'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
  lingoSounds?: boolean
}

export const CompletedRow = ({
  solution,
  guess,
  isRevealing,
  lingoSounds,
}: Props) => {
  const statuses = getGuessStatuses(solution, guess)
  const splitGuess = unicodeSplit(guess)

  // const [audio_correct] = useState(new Audio('/lingo_correct.mp3'))
  // const [audio_incorrect] = useState(new Audio('/lingo_incorrect.mp3'))
  // const [audio_partial] = useState(new Audio('/lingo_partial.mp3'))

  // useEffect(() => {
  //   if (isRevealing && lingoSounds) {
  //     for (let i = 0; i < solution.length; i++) {
  //       setTimeout(() => {
  //         const status = statuses[i]
  //         if (status === 'correct') {
  //           audio_correct.currentTime = 0
  //           audio_correct.play()
  //         } else if (status === 'present') {
  //           audio_partial.currentTime = 0
  //           audio_partial.play()
  //         } else if (status === 'absent') {
  //           audio_incorrect.currentTime = 0
  //           audio_incorrect.play()
  //         }
  //       }, REVEAL_TIME_MS * i)
  //     }
  //   }
  // }, [isRevealing])

  return (
    <div className="mb-1 flex justify-center">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
