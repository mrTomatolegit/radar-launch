import { Schema, model } from 'mongoose';

export type Sponsor = {
    logo?: string;
    name: string;
    contribution: number;
};

export interface IPool {
    title: string;
    subtitle: string;
    description: string;
    pool_amount: number;
    hero_image?: string;
    sponsors: Sponsor[];
    video: string;
}

const poolSchema = new Schema<IPool>(
    {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pool_amount: {
            type: Number,
            required: true
        },
        hero_image: {
            type: String
        },
        sponsors: [
            new Schema(
                {
                    logo: {
                        type: String
                    },
                    name: {
                        type: String,
                        required: true
                    },
                    contribution: {
                        type: String,
                        required: true
                    }
                },
                { _id: false }
            )
        ],
        video: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Pool = model<IPool>('Pool', poolSchema, 'pools');

export default Pool;
