import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkerDto } from './dto/worker.dto';
import { WorkerEntity } from './worker.entity';
import { WorkerRepository } from './worker.repository';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(WorkerEntity)
    private workerRepository: WorkerRepository,
  ) {}
  async getAll(): Promise<WorkerEntity[]> {
    const list = await this.workerRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'list is empty' });
    }
    return list;
  }
  async findById(id: number): Promise<WorkerEntity> {
    const worker = await this.workerRepository.findOneBy({
      id: id,
    });
    if (!worker) {
      throw new NotFoundException({ message: `worker with ${id} not exist` });
    }
    return worker;
  }
  async findByName(lastName: string): Promise<WorkerEntity> {
    const worker = await this.workerRepository.findOneBy({
      lastName: lastName,
    });
    return worker ? worker : null;
  }

  //   add some find metods

  async create(dto: WorkerDto): Promise<any> {
    const worker = this.workerRepository.create(dto);
    await this.workerRepository.save(worker);
    return { message: `worker ${worker.lastName} save` };
  }
  async update(id: number, dto: WorkerDto): Promise<any> {
    const worker = await this.findById(id);
    dto.lastName
      ? (worker.lastName = dto.lastName)
      : (worker.lastName = worker.lastName);
    dto.firstName
      ? (worker.firstName = dto.firstName)
      : (worker.firstName = worker.firstName);
    dto.positionRole
      ? (worker.positionRole = dto.positionRole)
      : (worker.positionRole = worker.positionRole);
    dto.contact
      ? (worker.contact = dto.contact)
      : (worker.contact = worker.contact);
    dto.shop ? (worker.shop = dto.shop) : (worker.shop = worker.shop);
    await this.workerRepository.save(worker);
    return { message: `worker with ${worker.lastName} and id: ${id} updated` };
  }
  async delete(id: number): Promise<any> {
    const worker = await this.findById(id);
    await this.workerRepository.delete(worker);
    return { message: `worker ${worker.lastName} delete` };
  }
}
