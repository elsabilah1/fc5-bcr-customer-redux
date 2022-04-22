import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
import { Check } from 'react-feather';
import { useLocation, useParams } from 'react-router-dom';
import Text from '../Text';

export default function InputField({
    type = 'text',
    label,
    name,
    icon,
    listData,
    placeholder,
    value,
    onChange,
    ...props
}) {
    const loc = useLocation();

    const baseClass = classNames(
        'w-full rounded-sm border border-gray-200 px-3 py-2 text-left text-gray-500 text-sm font-light placeholder:text-sm placeholder:font-light',
        loc.pathname.includes('cars') && 'disabled:bg-gray-200 disabled:text-gray-500',
        loc.pathname.includes('order') &&
            'disabled:bg-white disabled:p-0 disabled:border-none disabled:text-gray-500'
    );

    return (
        <div className="w-full flex-1 space-y-1">
            <label htmlFor={name}>
                <Text>{label}</Text>
            </label>
            <div>
                {type === 'select' ? (
                    <Select
                        className={baseClass}
                        name={name}
                        listData={listData}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        icon={!loc.pathname.includes('order') && icon}
                    />
                ) : (
                    <Input
                        className={baseClass}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        icon={!loc.pathname.includes('order') && icon}
                        {...props}
                    />
                )}
            </div>
        </div>
    );
}

// Select Component
function Select({ value, onChange, icon, className, placeholder, listData }) {
    const { id } = useParams();

    return (
        <Listbox value={value} onChange={onChange} disabled={id && true}>
            <div className="relative">
                <Listbox.Button className={className}>
                    <span className="text-gray-500">
                        <Text>{placeholder}</Text>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
                        <div className="text-gray-400">{icon}</div>
                    </span>
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-sm border border-gray-200 bg-white py-1 shadow-sm">
                    {listData.map((data, id) => (
                        <Listbox.Option
                            key={id}
                            className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                                }`
                            }
                            value={data.value}
                        >
                            {({ selected }) => (
                                <>
                                    <span>
                                        <Text type={`${selected ? 'bold' : 'base'}`}>
                                            {data.placeholder}
                                        </Text>
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-800">
                                            <Check size={18} />
                                        </span>
                                    ) : null}
                                </>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
}

// Input Component
function Input({ value, onChange, className, type, name, placeholder, icon, ...props }) {
    const { id } = useParams();

    return (
        <div className="relative">
            <input
                disabled={id && true}
                className={`${className} after:bg-white`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={name}
                placeholder={placeholder}
                {...props}
            />
            <label
                htmlFor={name}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3"
            >
                <div className="text-gray-400">{icon}</div>
            </label>
        </div>
    );
}
