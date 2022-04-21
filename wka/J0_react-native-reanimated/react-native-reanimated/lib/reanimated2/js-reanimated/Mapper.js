import MutableValue from './MutableValue';
export default class Mapper {
    constructor(module, mapper, inputs = [], outputs = []) {
        this.dirty = true;
        this.id = Mapper.MAPPER_ID++;
        this.inputs = this.extractMutablesFromArray(inputs);
        this.outputs = this.extractMutablesFromArray(outputs);
        this.mapper = mapper;
        const markDirty = () => {
            this.dirty = true;
            module.maybeRequestRender();
        };
        this.inputs.forEach((input) => {
            input.addListener(markDirty);
        });
    }
    execute() {
        this.dirty = false;
        this.mapper();
    }
    extractMutablesFromArray(array) {
        const res = [];
        function extractMutables(value) {
            if (value == null) {
                // return;
            }
            else if (value instanceof MutableValue) {
                res.push(value);
            }
            else if (Array.isArray(value)) {
                value.forEach((v) => extractMutables(v));
            }
            else if (typeof value === 'object') {
                Object.keys(value).forEach((key) => {
                    extractMutables(value[key]);
                });
            }
        }
        extractMutables(array);
        return res;
    }
}
Mapper.MAPPER_ID = 1;
