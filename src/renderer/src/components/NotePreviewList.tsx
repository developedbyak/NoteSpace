import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from '@/components'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@/hooks/useNotesList'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({})

  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, i) => (
        <NotePreview
          key={i}
          {...note}
          isActive={selectedNoteIndex === i}
          onClick={handleNoteSelect(i)}
        />
      ))}
    </ul>
  )
}
