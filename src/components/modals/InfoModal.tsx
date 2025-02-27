import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Hoe te spelen" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Raad het woord binnen 6 pogingen. Na elke gok verandert de kleur van de tegels om aan te geven hoe dicht je bij het woord was.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="R" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        De letter T staat in het woord en op de juiste plek.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="present"
        />
        <Cell value="R" isCompleted={true} />
        <Cell value="D" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        De letter E staat in het woord maar op de verkeerde plek.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="N" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="C" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="H" status="absent" />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        De letter H staat nergens in het woord.
      </p>

    </BaseModal>
  )
}
