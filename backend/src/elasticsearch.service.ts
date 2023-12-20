import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  private readonly elasticClient: Client;

  constructor() {
    this.elasticClient = new Client({ node: 'http://localhost:9200' });
  }

  async indexUserDocument(user: any) {
    try {
      const { body } = await this.elasticClient.index({
        index: 'users', 
        body: user,
      });
      return body;
    } catch (error) {
      throw new Error(`Error indexing user: ${error}`);
    }
  }
  async searchUserByUsername(username: string) {
    try {
      const { body } = await this.elasticClient.search({
        index: 'users',
        body: {
          query: {
            match: {
              username: username,
            },
          },
        },
      });
      return body.hits.hits[0]; // İlgili kullanıcı belgesini döndürür
    } catch (error) {
      throw new Error(`Error searching for user: ${error}`);
    }
  }
}