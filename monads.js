
const just = (val) => ({
     emit: () => val,
     map: f => maybeOf(f(val)),
     chain: f => f(val),
     inspect: () => `just(${val})`,
     isNothing: false,
     fork: (_, f) => f(val)
});

const nothing = (x) => ({
     emit: () => nothing(),
     map: f => nothing(),
     chain: f => nothing(),
     inspect: () => `Nothing(${val})`,
     isNothing: true,
     fork: (f,_) => f()
});


const maybeOf = x => x === null || x === undefined || x.isNothing || isNaN(x) ? nothing() : just(x);

const exportMaybe = {
      of: maybeOf
}

export {
     exportMaybe as Maybe
}