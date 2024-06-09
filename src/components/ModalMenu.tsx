import { OptionMenu } from '../interfaces';
interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    optionsMenu: OptionMenu[],
    optionSelected: number,
    handleClick: (id:number) => void
}

const ModalMenu = ({isOpen, onClose, optionsMenu, optionSelected, handleClick}:ModalProps) => {

    if(!isOpen) return null

    return (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 -mt-96">
            <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg">
                <ul className="flex flex-col space-y-4">
                    {optionsMenu.map(option => (
                        <li key={option.id}>
                            <a
                                href={option.link}
                                className={`${option.id === optionSelected ? 'text-Dark-Blue' : 'text-Grayish-Blue'}  font-PublicSans`}
                                onClick={() => {
                                    handleClick(option.id);
                                    onClose();
                                }}
                            >
                                {option.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ModalMenu
