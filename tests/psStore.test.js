import { setActivePinia, createPinia } from 'pinia'
import { usePsStore } from '../src/store/psStore'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('psStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetchPs mengambil data dari API', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, nama: 'PS 5' }] })
    const store = usePsStore()
    await store.fetchPs()
    expect(store.psList.length).toBe(1)
    expect(store.psList[0].nama).toBe('PS 5')
  })
})