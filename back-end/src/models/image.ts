import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import orphanage from './orphanage'
import Orphanage from './orphanage'

@Entity('images')
export default class image{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage
}